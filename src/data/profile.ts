export interface Social {
  label: string;
  href: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mastodon' | 'mail' | 'rss';
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  handle: string;
  jobTitle: string;
  tagline: string;
  location: string;
  socials: Social[];
}

export const profile: Profile = {
  name: 'Alex Developer',
  firstName: 'Alex',
  lastName: 'Developer',
  handle: 'yourusername',
  jobTitle: 'Full-Stack Engineer',
  tagline: 'Full-stack engineer. I make slow things fast.',
  location: 'San Francisco, CA',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/yourusername',          icon: 'github' },
    { label: 'Mastodon', href: 'https://mastodon.social/@yourusername',     icon: 'mastodon' },
    { label: 'Email',    href: 'mailto:you@example.com',                    icon: 'mail' },
  ],
} as const;
