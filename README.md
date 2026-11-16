# Motion Designer Portfolio Website Template

A one-page portfolio for video editors and motion designers, with a 3D film-reel hero, a draggable ID card, a hover reveal photo, a timeline-style process section and a 3D "let's collab" button. Plain HTML, CSS and JavaScript, so there's no build step. It runs free on GitHub Pages.

**[View the live site →](https://brazilsingh.github.io/motion-designer-website-portfolio-demo/)**

[![Animated preview of the portfolio website: 3D hero, draggable ID card, video work, process timeline and hover reveal photo](assets/preview.gif)](https://brazilsingh.github.io/motion-designer-website-portfolio-demo/)

## Features

- **3D hero:** a rotating ring of film frames on a perspective floor, with light beams.
- **Draggable ID card:** a lanyard ID card that swings when you drag it.
- **Work rails:** long-form (16:9) and Shorts (9:16) rows that load YouTube thumbnails from a link.
- **Process timeline:** an editing timeline with a moving playhead.
- **Hover reveal:** move over the photo to reveal an alternate version (tap and drag on phones).
- **Contact:** copy-email button and a WhatsApp link.
- **Ready for search:** title and description, Open Graph and X cards, JSON-LD structured data, a sitemap, and text that's in the HTML before JavaScript runs.
- **Mobile:** a lighter layout on phones, and it respects reduced-motion settings.

## Make it yours with AI

Use any AI coding agent, such as Claude Code, Cursor, GitHub Copilot or Codex. The repo includes [`AGENTS.md`](AGENTS.md), which tells the AI to ask for your details first, keep the design exactly as it is, and change only the content.

**Claude Code:** clone the repo, open it, and type:

```
/clone
```

**Any other AI:** paste this prompt:

```
Clone https://github.com/brazilsingh/motion-designer-website-portfolio-demo
and follow the "Clone flow" in its AGENTS.md to make it my portfolio.
Ask me for my details first. Keep the design; change only the content.
```

The AI will ask for your name, roles, bio, skills, video links, photos and contact details. Then it updates the content, the search tags, the sitemap and the photos for you.

## Make it yours by hand

1. Edit the `CONTENT` object at the top of `script.js`. All visible content lives there.
2. Update the block between `<!-- SEO:START` and `<!-- SEO:END -->` in `index.html`, and the text inside the `data-c="…"` elements, so they match.
3. Replace `assets/me-front.webp` (normal photo) and `assets/me-mask.webp` (reveal photo, same size and framing).
4. Put your site address in `sitemap.xml`.
5. Turn on **Settings → Pages → Deploy from branch → main / root**.

## Get found on Google

After the site is live, add it to [Google Search Console](https://search.google.com/search-console), verify it, and submit `sitemap.xml`. Google usually starts indexing within a few days.

## Licence and credits

- Code: MIT. See [`LICENSE`](LICENSE). The photos, name, bio, video links and contact details are personal and not licensed for reuse, so replace them with your own.
- Effects adapted from [portfolio-effects](https://github.com/zzfahh/portfolio-effects) by Jaman Mahi (MIT).
- 3D "let's collab" button: [Venom Button](https://github.com/exteestudio/venom-button) by exteestudio (MIT, `collab/LICENSE`).
