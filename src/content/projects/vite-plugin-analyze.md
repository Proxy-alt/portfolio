---
title: "vite-plugin-analyze"
repo: "yourusername/vite-plugin-analyze"
summary: "Vite plugin for bundle analysis with an interactive treemap visualization and size regression alerts."
role: "creator"
highlights:
  - "CI integration with configurable size budgets"
  - "Interactive treemap with module-level detail"
  - "Works with Rollup and esbuild output"
featured: false
order: 4
---

Every team I've worked on has had the same problem: bundle size regressions that nobody noticed until the site slowed down. vite-plugin-analyze makes size a first-class CI signal — each build produces a treemap report and diffs it against the previous run, failing the build if any chunk exceeds its budget.

The treemap renderer is pure SVG generated at build time. No runtime, no client-side charting library — just a static HTML file you can share as a build artifact.
