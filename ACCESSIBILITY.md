# Accessibility

The goal is for anyone to be able to read the portfolio, see the work and get in touch, whatever device or settings they use. This is what the template does today, and what it doesn't do yet.

## What works

- **Reduced motion:** if the visitor's system asks for less motion, the 3D scene, the moving skills strip, the custom cursor and the other animations stop, and scrolling isn't smoothed.
- **Keyboard:** a "Skip to work" link comes first, every link and button can be reached with Tab, and focus shows a visible outline.
- **Screen readers:** decorative layers (the 3D scene, the loader, the timeline graphic) are hidden from screen readers. Icon buttons, such as the work-rail arrows, have text labels, and the photos have alt text.
- **Touch:** the photo reveal works with tap and drag, and the heavy effects are skipped on phones.
- **Text in the HTML:** the main text is in the page before JavaScript runs, so it can be read even if a script fails.

## Known limits

- The draggable ID card and the photo reveal are mouse and touch effects. They're decorative, and the same name, role and photo appear elsewhere on the page in plain form.
- The 3D "let's collab" button runs in an embedded frame. A normal link sits exactly over it, but some screen readers may announce the frame too.
- Colour contrast has been checked by eye, not with a full audit. If you change `--accent`, check that text on the accent colour still reaches a 4.5:1 contrast ratio.

## Supported browsers

Current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile.

## Report a barrier

If something stops you from using a site built with this template, [open a bug report](https://github.com/brazilsingh/motion-designer-website-portfolio-demo/issues/new?template=bug.yml) and say which browser, device and assistive technology you use. Accessibility fixes get priority.
