export interface Social {
  label: string;
  url: string;
  icon: 'github' | 'twitter' | 'linkedin' | 'mastodon' | 'rss';
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  extendedBio: string;
  avatarInitials: string;
  socials: Social[];
  donateUrl: string;
}

export const profile: Profile = {
  name: 'Alex Developer',
  title: 'Full-Stack Engineer & Open Source Contributor',
  bio: 'I craft performant, accessible web experiences and contribute to the open source ecosystem. Passionate about developer tooling, modern CSS, and pushing the web platform forward.',
  extendedBio: `With over 8 years of experience building for the web, I've worked across the full stack — from database schema design to pixel-perfect UIs. My work spans startups, scale-ups, and open source communities.

I care deeply about web performance, accessibility, and the developer experience. When I'm not pushing code, I'm writing about what I learn, speaking at local meetups, or mentoring early-career developers.

I believe the best software is built collaboratively and in the open.`,
  avatarInitials: 'AD',
  socials: [
    { label: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { label: 'Twitter / X', url: 'https://twitter.com/yourusername', icon: 'twitter' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { label: 'Mastodon', url: 'https://mastodon.social/@yourusername', icon: 'mastodon' },
    { label: 'RSS', url: '/rss.xml', icon: 'rss' },
  ],
  donateUrl: 'https://github.com/sponsors/yourusername',
};
