---
name: motion-portfolio
description: Builds a personal portfolio website for a video editor, motion designer or 3D artist from an open-source template (3D hero, draggable ID card, hover reveal photo, YouTube work rails), then publishes it free on GitHub Pages. Use when someone asks for a portfolio site, a showreel site, or to "make my portfolio" as an editor, animator or motion designer.
---

# Motion portfolio builder

Turns the [Motion Designer Portfolio Template](https://github.com/brazilsingh/motion-designer-website-portfolio-demo) into the user's own one-page portfolio. It asks for their details, swaps in their content, keeps the design, and gets the site online without a paid domain or hosting.

## When to use this skill

- A video editor, motion designer or 3D artist wants a portfolio website.
- Someone has YouTube work and wants it shown on a personal site.
- Someone asks to "make my portfolio" or "build a showreel site".

## What this skill does

1. **Gets the template** by cloning it, or works in a copy the user made with **Use this template**.
2. **Collects the details** in one message: name, roles, bio, skills, video links, contact details and photos.
3. **Personalises the content** and the search and share tags, and replaces every trace of the template owner, including the photos.
4. **Checks the result** with the repo's own check script.
5. **Publishes it** on GitHub Pages and gives the user their link.

## How to use

### Basic usage

```
Make my portfolio website. I'm a video editor.
```

### Advanced usage

```
Make my portfolio with the 3D artist style. Here's my CV: [paste].
My videos: [YouTube links]. Use my photos me.png and me-alt.png.
```

## Steps

1. **Get the template.** If the current folder isn't a copy of it, run
   `git clone https://github.com/brazilsingh/motion-designer-website-portfolio-demo my-portfolio`.
   If you can't run commands, ask the user to click **Use this template** on the repo page.
2. **Read `AGENTS.md` in the template and follow its "Clone flow" exactly.** It lists the questions to ask, every file to edit, the template-only files to remove, and the checks to run.
3. **Never keep the template's personal content.** If the user has no photos, use the neutral placeholders the guide names.
4. **Before pushing,** point `origin` at the user's own repo. The clone still points at the template.
5. **Publish:** push, turn on **Settings → Pages → Deploy from branch → main / root**, and give the user `https://<username>.github.io/<repo>/`.

## Example

**User:** "Make my portfolio. I'm Priya Nair, a wedding filmmaker and colourist. Tagline: Your day, cut like a film."

**Output:** a site at `https://priyanair.github.io/portfolio/` with Priya's name in the hero and on the ID card, her films in the work rails, her bio and contact details, matching search and share tags, and a short README crediting the template. The template owner's name, photos and contacts are gone.

## Tips

- Show the user the style demos first: `?demo=3d-artist`, `?demo=yt-editor` and `?demo=brand-motion` on the [live template](https://brazilsingh.github.io/motion-designer-website-portfolio-demo/).
- The two photos must have the same size and framing, because one is revealed over the other on hover.
- After the site is live, take a 1200×630 screenshot of the hero as the share image.

## Common use cases

- A freelance editor's first portfolio site.
- A motion designer replacing a Behance-only presence with their own page.
- A YouTube editor showing long-form and Shorts work in one place.

## Install this skill

- **Claude Code:** copy the `motion-portfolio` folder into `~/.claude/skills/`.
- **Claude apps:** zip the `motion-portfolio` folder and upload it under **Settings → Capabilities → Skills**.

If it helped, a star on the [template repo](https://github.com/brazilsingh/motion-designer-website-portfolio-demo) helps other editors find it.
