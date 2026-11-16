# Contributing

Thanks for helping. Bug fixes, new demo personas, prompts, translations and docs are all welcome.

## Before you start

- **Small fix** (typo, broken link, a bug with a clear cause): open a pull request directly.
- **Anything bigger** (a new section, a design change, a new feature): open an issue first so we can agree on the approach.
- Look for issues labelled [`good first issue`](https://github.com/brazilsingh/motion-designer-website-portfolio-demo/labels/good%20first%20issue) if you want a place to start.

## Run it locally

There's no build step. From the repo folder, start any static server and open the page:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. Add `?demo=3d-artist`, `?demo=yt-editor` or `?demo=brand-motion` to check the demos.

## Rules for changes

- Keep it plain HTML, CSS and JavaScript. No frameworks and no build tools.
- All visible content belongs in `CONTENT` in `script.js`. If you change it, update the matching text in the `SEO` block and the `data-c` elements in `index.html`.
- Test on a phone-sized screen and with reduced motion turned on.
- Keep the licence notices in `LICENSE` and `collab/LICENSE`.
- One change per pull request.

The **Check** workflow runs on every pull request. It validates the JavaScript, the structured data and the links to local files.

## Add a demo persona

1. Add an entry to `window.DEMOS` in `demos.js`: a `label`, an `accent` colour and the `content`.
2. Add `assets/demos/<key>-front.webp` and `<key>-reveal.webp`, 1000×1000 with a transparent background. Use illustrations or photos you have the rights to, not photos of real people found online.
3. Use sample videos you're allowed to show, such as Creative Commons films, and label them as samples.
4. Add the demo to the gallery table in `README.md`.

## Share a prompt

Add it to `PROMPTS.md` under the right heading, with `[brackets]` for the parts people replace.

## Show your site

Built your portfolio with this template? [Submit it to the showcase](https://github.com/brazilsingh/motion-designer-website-portfolio-demo/issues/new?template=showcase.yml).

By contributing, you agree that your contribution is licensed under the [MIT licence](LICENSE) and that you'll follow the [code of conduct](CODE_OF_CONDUCT.md).
