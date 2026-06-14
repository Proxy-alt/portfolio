---
title: "devlog"
repo: "yourusername/devlog"
summary: "A minimal static-site generator for developer blogs with MDX support and built-in syntax highlighting."
role: "creator"
highlights:
  - "Sub-100ms build times for typical blogs"
  - "MDX with custom component injection"
  - "Zero-config syntax highlighting via Shiki"
featured: false
order: 6
---

I wanted a blog engine that felt fast to use and produced genuinely fast output — not a framework that happened to have a blog starter. devlog is written in Go, which makes the build times nearly instant even for large sites, and produces HTML that's correct and minimal without requiring any configuration.

The MDX support is the part I'm most proud of. Parsing MDX in Go required writing a custom transformer that bridges the CommonMark AST to a simple component injection system — no JS runtime in the build pipeline.
