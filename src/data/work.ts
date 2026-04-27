export interface WorkProject {
  company: string;
  role: string;
  period: string;
  description: string;
  impact: string[];
  url: string;
  tags: string[];
  accentColor: string;
}

export const workProjects: WorkProject[] = [
  {
    company: 'Acme Platform',
    role: 'Lead Frontend Engineer',
    period: '2023 – Present',
    description:
      'Leading the migration of a legacy jQuery monolith to a modern React + TypeScript stack serving 3M+ daily active users.',
    impact: [
      'Reduced Time-to-Interactive by 60%',
      'Shipped design system used across 4 products',
      'Mentored a team of 6 engineers',
    ],
    url: 'https://acme.example.com',
    tags: ['React', 'TypeScript', 'Design Systems'],
    accentColor: 'oklch(0.65 0.2 200)',
  },
  {
    company: 'StartupCo',
    role: 'Full-Stack Engineer',
    period: '2021 – 2023',
    description:
      'Built and scaled the core product from 0 to Series A. Owned the data pipeline, GraphQL API, and the React frontend.',
    impact: ['Launched 0→1 in 4 months', 'Scaled to 50 000 users pre-Series A', 'Designed multi-tenant architecture'],
    url: 'https://startupco.example.com',
    tags: ['Node.js', 'GraphQL', 'PostgreSQL', 'React'],
    accentColor: 'oklch(0.65 0.2 140)',
  },
  {
    company: 'OpenWeb Foundation',
    role: 'Contract Engineer',
    period: '2020 – 2021',
    description:
      'Worked on open standards tooling and developer advocacy for web accessibility guidelines and WCAG compliance automation.',
    impact: [
      'Contributed to WCAG tooling',
      'Wrote technical documentation read by 40k devs',
      'Automated accessibility audit pipelines',
    ],
    url: 'https://openweb.example.com',
    tags: ['Accessibility', 'Python', 'CI/CD'],
    accentColor: 'oklch(0.65 0.2 30)',
  },
  {
    company: 'Freelance',
    role: 'Independent Developer',
    period: '2018 – 2020',
    description:
      'Delivered web applications, brand sites, and e-commerce solutions for clients across retail, media, and fintech.',
    impact: [
      '20+ projects shipped on time',
      'E-commerce stores generating $2M+ ARR',
      'Built long-term recurring client relationships',
    ],
    url: 'https://yourdomain.example.com',
    tags: ['WordPress', 'Shopify', 'Vue.js'],
    accentColor: 'oklch(0.65 0.2 320)',
  },
];
