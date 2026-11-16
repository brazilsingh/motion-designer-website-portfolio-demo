# Instructions for AI agents

This repo is a one-page portfolio template for a video editor or motion designer. Plain HTML, CSS and JS, no build step, hosted on GitHub Pages.

When the user asks to **clone**, **personalise** or **make this site mine**, follow the clone flow below. Keep the design exactly as it is. Change only the content.

The photos, name, bio, video links and contact details that ship with the template belong to a real person. **None of them may stay in the user's site.**

## Clone flow

### 1. Ask for the details first

Ask the user for all of these in one message, then wait for the answers. Mark which ones are optional.

- Full name
- Short job title for the ID card (for example "Video Editor & Motion")
- Roles line (for example "Video Editor · Motion Designer · After Effects")
- One-line tagline
- Software they use: any of `ae`, `pr`, `ps`, `ai`, `davinci`
- Skills for the moving strip (4 to 8 short words)
- About title and a 2 to 3 sentence bio
- Three strengths
- Long-form videos: title, client and YouTube link for each (newest first)
- Shorts: title, client and YouTube link for each
- Email
- WhatsApp number with country code, digits only, and how to display it (optional)
- Two photos with the same size and framing: a normal one and an alternate "reveal" version (optional)
- Their GitHub username and the repo name they want. The site address will be `https://<username>.github.io/<repo>/`

If they're unsure about the style, show them the demos on the live template: `?demo=3d-artist`, `?demo=yt-editor` and `?demo=brand-motion`.

### 2. Edit these places

| What | Where |
| --- | --- |
| All visible content | the `CONTENT` object at the top of `script.js` |
| Search and share tags | the block between `<!-- SEO:START` and `<!-- SEO:END -->` in `index.html`: title, description, author, canonical URL, `og:*` and `twitter:*` tags, and the JSON-LD (name, job title, URL, skills, `workExample` video list) |
| Text Google reads before JavaScript runs | the text inside every element with `data-c="…"` in `index.html`, plus the `alt` text of `#cardPhoto` and `#normal`. Make it match `CONTENT` exactly |
| Site address | `<loc>` and `<lastmod>` in `sitemap.xml` |
| Photos | If the user gave photos, make them 1000×1000 WebP with a transparent background and save them as `assets/me-front.webp` (normal) and `assets/me-mask.webp` (reveal). **If not, copy `assets/placeholder-front.webp` and `assets/placeholder-reveal.webp` over those two files.** Never keep the template's photos |
| Share image | **Delete `assets/og-image.jpg` and `assets/preview.gif`**, which show the template owner. Once the site is live, take a 1200×630 screenshot of the new hero and save it as `assets/og-image.jpg`. Until then, remove the `og:image`, `og:image:*` and `twitter:image` lines and `primaryImageOfPage` in the JSON-LD |
| Favicon | the initials in `assets/favicon.svg` |
| README | replace the whole file with a short personal README, using the template below |

**Remove template-only files.** They're for maintaining the template and point to its repo: `demos.js` (and its `<script src="demos.js">` tag in `index.html`), `assets/demos/`, `assets/placeholder-*.webp` (after copying them if needed), `CHANGELOG.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `ACCESSIBILITY.md`, `PROMPTS.md`, `skills/`, `.github/ISSUE_TEMPLATE/` and `.github/pull_request_template.md`. Keep `AGENTS.md`, `CLAUDE.md`, `.claude/` and `.github/workflows/` and `.github/scripts/`, which help with future edits.

**README template for the user's repo:**

```markdown
# <Name> · <Role>

Portfolio website: https://<username>.github.io/<repo>/

Built with the [Motion Designer Portfolio Template](https://github.com/brazilsingh/motion-designer-website-portfolio-demo).
```

### 3. Do not change

- `style.css`, the layout, the animations, `collab/` or the structure of `index.html`.
- `LICENSE` and `collab/LICENSE`. The MIT notices must stay in every copy.

### 4. Check before you finish

- Run `python .github/scripts/check.py` and `node --check script.js`. Both must pass.
- Search every file except `LICENSE` and this `AGENTS.md` for the template owner's name, email and phone number (`Anup`, `antimsinghanup`, `883578`). Nothing should be found.
- Open `index.html` locally and confirm every section shows the new content and photos.

### 5. Publish

1. If this folder came from `git clone`, its `origin` still points at the template. Point it at the user's repo first: `git remote set-url origin https://github.com/<username>/<repo>.git` (the user creates the empty repo on GitHub, or uses **Use this template**).
2. Push, then turn on **Settings → Pages → Deploy from branch → main / root**.
3. Give the user their link, and remind them to add the share image once it's live.
4. Optional: add the site to [Google Search Console](https://search.google.com/search-console) and submit `sitemap.xml`.
