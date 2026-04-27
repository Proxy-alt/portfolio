export interface OSSProject {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  tags: string[];
  language: string;
  languageColor: string;
}

export const ossProjects: OSSProject[] = [
  {
    name: 'turbo-query',
    description: 'A zero-dependency, type-safe query builder for TypeScript with full support for complex joins and subqueries.',
    url: 'https://github.com/yourusername/turbo-query',
    stars: 2100,
    forks: 134,
    tags: ['TypeScript', 'Database', 'DX'],
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    name: 'csscraft',
    description: 'A modern CSS-in-JS alternative that leverages CSS custom properties for zero-runtime styling at scale.',
    url: 'https://github.com/yourusername/csscraft',
    stars: 987,
    forks: 67,
    tags: ['CSS', 'Styling', 'Zero-runtime'],
    language: 'JavaScript',
    languageColor: '#f7df1e',
  },
  {
    name: 'vite-plugin-analyze',
    description: 'Vite plugin for bundle analysis with an interactive treemap visualization and size regression alerts.',
    url: 'https://github.com/yourusername/vite-plugin-analyze',
    stars: 543,
    forks: 28,
    tags: ['Vite', 'Build Tools', 'Performance'],
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    name: 'accessible-modal',
    description: 'A fully accessible modal dialog with focus trapping, ARIA attributes, and keyboard navigation baked in.',
    url: 'https://github.com/yourusername/accessible-modal',
    stars: 321,
    forks: 45,
    tags: ['Accessibility', 'UI', 'ARIA'],
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    name: 'rust-json-fast',
    description: 'High-performance JSON parser in Rust with WebAssembly bindings for the browser and Node.js.',
    url: 'https://github.com/yourusername/rust-json-fast',
    stars: 1456,
    forks: 89,
    tags: ['Rust', 'WASM', 'Performance'],
    language: 'Rust',
    languageColor: '#dea584',
  },
  {
    name: 'devlog',
    description: 'A minimal static-site generator for developer blogs with MDX support and built-in syntax highlighting.',
    url: 'https://github.com/yourusername/devlog',
    stars: 234,
    forks: 31,
    tags: ['SSG', 'Blogging', 'MDX'],
    language: 'Go',
    languageColor: '#00add8',
  },
];
