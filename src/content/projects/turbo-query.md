---
title: "turbo-query"
repo: "yourusername/turbo-query"
summary: "A zero-dependency, type-safe query builder for TypeScript with full support for complex joins and subqueries."
role: "creator"
highlights:
  - "Zero runtime dependencies"
  - "Full TypeScript inference across joins"
  - "2100+ stars on GitHub"
featured: true
order: 1
---

Built out of frustration with ORMs that hide too much and query builders that aren't type-safe enough. turbo-query gives you the expressiveness of raw SQL with the safety of TypeScript's type system — every column, join, and subquery is fully typed with no codegen required.

The core insight was using TypeScript's template literal types to model SQL's grammar at the type level, then using a fluent builder API that carries that type information through every transformation. The result is a query builder where mistakes are caught at the editor, not in production.
