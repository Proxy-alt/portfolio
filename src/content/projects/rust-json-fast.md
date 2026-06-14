---
title: "rust-json-fast"
repo: "yourusername/rust-json-fast"
summary: "High-performance JSON parser in Rust with WebAssembly bindings for the browser and Node.js."
role: "creator"
highlights:
  - "3–5× faster than JSON.parse on large payloads"
  - "WASM bundle under 50 kB"
  - "Zero-copy parsing via Rust slices"
featured: true
order: 2
---

Started as a performance experiment: how fast can JSON parsing get when you control the allocator and skip UTF-8 validation for already-valid inputs? The answer turned out to be surprisingly fast — fast enough to matter for analytics dashboards processing megabyte-scale payloads on every render.

The WASM bindings were the interesting part. Getting zero-copy semantics across the WASM boundary requires careful use of `SharedArrayBuffer` and Atomics. The final API is a drop-in for `JSON.parse` with an opt-in streaming mode for large files.
