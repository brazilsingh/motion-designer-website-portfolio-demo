# Instructions for AI agents

This repo is a one-page portfolio for a video editor or motion designer. Plain HTML, CSS and JS, no build step, hosted on GitHub Pages.

When the user asks to **clone**, **personalise** or **make this site mine**, follow the clone flow below. Keep the design exactly as it is. Change only the content.

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
- Two photos with the same size and framing: a normal one and an alternate "reveal" version (optional; keep the current ones as placeholders if not given)
- The final website address, usually `https://<github-username>.github.io/<repo-name>/`

### 2. Edit only these places

| What | Where |
| --- | --- |
| All visible content | the `CONTENT` object at the top of `script.js` |
| Search and share tags | the block between `<!-- SEO:START` and `<!-- SEO:END -->` in `index.html`: title, description, author, canonical URL, `og:*` and `twitter:*` tags, and the JSON-LD (name, job title, URL, skills, `workExample` video list) |
| Text Google reads before JavaScript runs | the text inside every element with `data-c="…"` in `index.html`, plus the `alt` text of `#cardPhoto` and `#normal`. Make it match `CONTENT` exactly |
| Site address | `<loc>` and `<lastmod>` in `sitemap.xml` |
| Photos | `assets/me-front.webp` (normal) and `assets/me-mask.webp` (reveal). Keep the file names, or update the paths in `CONTENT.photos` |
| Share image | `assets/og-image.jpg`, 1200×630. Take a screenshot of the new hero once the site is live |
| Favicon | the initials in `assets/favicon.svg` |
| README | the name, the live link and the preview GIF |
| Demo personas | delete `demos.js`, its `<script src="demos.js">` tag in `index.html`, and the `assets/demos/` folder. They're only for the template's showcase |

### 3. Do not change

- `style.css`, the layout, the animations, `collab/` or the structure of `index.html`.
- `LICENSE` and `collab/LICENSE`. The MIT notices must stay in every copy.

### 4. Check before you finish

- Open `index.html` locally and confirm every section shows the new content.
- Search the repo for the previous owner's name, email and phone number. None should be left.
- Confirm the JSON-LD in `index.html` is valid JSON.

### 5. Publish

1. Push to a GitHub repo, then turn on **Settings → Pages → Deploy from branch → main / root**.
2. Add the site to [Google Search Console](https://search.google.com/search-console), verify it, and submit `sitemap.xml`. Google usually starts indexing within days.
