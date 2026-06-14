---
title: "csscraft"
repo: "yourusername/csscraft"
summary: "A modern CSS-in-JS alternative that leverages CSS custom properties for zero-runtime styling at scale."
role: "creator"
highlights:
  - "Zero runtime — styles resolve at build"
  - "Native CSS custom property output"
  - "Full TypeScript DX with autocomplete"
featured: false
order: 3
---

CSS-in-JS libraries that ship a runtime have always felt like the wrong tradeoff: you pay in bundle size and hydration cost for a DX benefit that doesn't require any of that. csscraft compiles your styles to CSS custom properties at build time, leaving you with plain CSS and a tiny typed API for consuming the tokens.

The compiler is the hard part — mapping the JS object model to the cascade requires understanding specificity at the AST level. The result is a library that beats Tailwind on raw CSS output size and beats CSS Modules on the DX side.
