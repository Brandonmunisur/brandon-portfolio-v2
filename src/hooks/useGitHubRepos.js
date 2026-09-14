import { useEffect, useState } from 'react'

const FALLBACK = [
  {
    id: 'careerboard',
    name: 'careerboard-react',
    description: 'React job application tracker for managing an active job search.',
    html_url: 'https://github.com/Brandonmunisur/careerboard-react',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 'disney',
    name: 'disney-clone',
    description: 'Disney+ inspired React interface using Firebase and Redux.',
    html_url: 'https://github.com/Brandonmunisur/disney-clone',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
  },
]

export function useGitHubRepos() {
  const [state, setState] = useState({ repos: FALLBACK, loading: true, live: false })

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const response = await fetch(
          'https://api.github.com/users/Brandonmunisur/repos?sort=updated&per_page=12',
          { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } },
        )
        if (!response.ok) throw new Error('GitHub request failed')
        const data = await response.json()
        const repos = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 4)
        setState({ repos: repos.length ? repos : FALLBACK, loading: false, live: true })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setState({ repos: FALLBACK, loading: false, live: false })
        }
      }
    }

    load()
    return () => controller.abort()
  }, [])

  return state
}
