---
title: "accessible-modal"
repo: "yourusername/accessible-modal"
summary: "A fully accessible modal dialog with focus trapping, ARIA attributes, and keyboard navigation baked in."
role: "creator"
highlights:
  - "WCAG 2.2 AA compliant out of the box"
  - "Zero dependencies, 2 kB minified"
  - "Native dialog element under the hood"
featured: false
order: 5
---

Most modal libraries get focus trapping wrong in subtle ways — they fail on shadow DOM, on dynamically inserted content, or on iOS Safari's broken `inert` implementation. accessible-modal is my attempt to get all of that right and ship it as a zero-dependency component you can use in any framework or no framework at all.

It builds on the native `<dialog>` element where supported, polyfilling only what's necessary for the 5% of browsers that still need it. The focus trap handles shadow DOM and dynamically added focusable elements without polling.
