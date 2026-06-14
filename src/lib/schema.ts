import type { Profile } from '../data/profile';
import type { GitHubStats } from './github';

export function personLd(p: Profile, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    url: siteUrl,
    jobTitle: p.jobTitle,
    sameAs: p.socials.map((s) => s.href).filter((h) => !h.startsWith('mailto:')),
  };
}

export function websiteLd(siteUrl: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name,
  };
}

export function projectLd(
  proj: { title: string; summary: string; repo: string },
  gh: GitHubStats | undefined,
  authorName: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: proj.title,
    description: proj.summary,
    codeRepository: `https://github.com/${proj.repo}`,
    programmingLanguage: gh?.primaryLanguage?.name,
    author: { '@type': 'Person', name: authorName },
  };
}
