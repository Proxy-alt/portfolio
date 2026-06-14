import reposCache from '../data/repos.cache.json';

export interface GitHubStats {
  stargazerCount: number;
  primaryLanguage: { name: string; color: string } | null;
  pushedAt: string;
  description: string | null;
}

type StatsMap = Record<string, GitHubStats>;

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      followers { totalCount }
      repositories(first: 100, privacy: PUBLIC, isFork: false) {
        nodes {
          nameWithOwner
          stargazerCount
          primaryLanguage { name color }
          pushedAt
          description
        }
      }
    }
  }
`;

export async function fetchGitHubStats(login: string): Promise<StatsMap> {
  const token = import.meta.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('[github] No GITHUB_TOKEN — using cache');
    return reposCache as StatsMap;
  }

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: QUERY, variables: { login } }),
    });

    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);

    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));

    const nodes: Array<{
      nameWithOwner: string;
      stargazerCount: number;
      primaryLanguage: { name: string; color: string } | null;
      pushedAt: string;
      description: string | null;
    }> = json.data?.user?.repositories?.nodes ?? [];

    const map: StatsMap = {};
    for (const node of nodes) {
      map[node.nameWithOwner] = {
        stargazerCount: node.stargazerCount,
        primaryLanguage: node.primaryLanguage,
        pushedAt: node.pushedAt,
        description: node.description,
      };
    }
    return map;
  } catch (err) {
    console.warn('[github] Fetch failed, using cache:', err);
    return reposCache as StatsMap;
  }
}
