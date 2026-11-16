"""Checks the site before it ships: JSON-LD, sitemap, and links to local files."""
import json
import pathlib
import re
import sys
import xml.dom.minidom

root = pathlib.Path(__file__).resolve().parents[2]
html = (root / "index.html").read_text(encoding="utf-8")
errors = []

# 1. Structured data must be valid JSON with the expected types.
blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
if not blocks:
    errors.append("index.html has no JSON-LD block")
for block in blocks:
    try:
        types = [node["@type"] for node in json.loads(block)["@graph"]]
        print("JSON-LD types:", ", ".join(types))
    except (ValueError, KeyError) as exc:
        errors.append(f"JSON-LD is invalid: {exc}")

# 2. The SEO block must contain the core tags.
# og:image is optional: a new copy removes it until it has its own screenshot.
for tag in ('rel="canonical"', 'name="description"', 'property="og:title"', 'name="twitter:card"'):
    if tag not in html:
        errors.append(f"index.html is missing {tag}")

# 3. The sitemap must be valid XML.
try:
    xml.dom.minidom.parse(str(root / "sitemap.xml"))
except Exception as exc:  # noqa: BLE001
    errors.append(f"sitemap.xml is invalid: {exc}")

# 4. Every local file referenced from the page and scripts must exist.
refs = {
    value.split("?")[0]
    for value in re.findall(r'(?:src|href)="([^"]+)"', html)
    if not re.match(r"^(?:[a-z]+:|//|#)", value)
}
for js in ("script.js", "demos.js"):
    path = root / js
    if path.exists():
        refs |= set(re.findall(r'"(assets/[^"$]+\.(?:webp|png|jpe?g|svg|gif))"', path.read_text(encoding="utf-8")))
demos = root / "demos.js"
if demos.exists():
    for key in re.findall(r'^\s*"([\w-]+)":\s*\{\s*$', demos.read_text(encoding="utf-8"), re.M):
        refs |= {f"assets/demos/{key}-front.webp", f"assets/demos/{key}-reveal.webp"}
for ref in sorted(refs):
    if not (root / ref).exists():
        errors.append(f"missing file: {ref}")
print(f"Checked {len(refs)} local file references")

if errors:
    print("\n".join(f"ERROR: {e}" for e in errors))
    sys.exit(1)
print("All checks passed")
