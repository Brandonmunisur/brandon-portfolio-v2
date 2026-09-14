import { useGitHubRepos } from '../hooks/useGitHubRepos.js'
import { useReveal } from '../hooks/useReveal.js'
import { GithubIcon } from './Icons.jsx'
import SectionHeading from './SectionHeading.jsx'

function formatName(name) {
  return name.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

export default function GitHubActivity() {
  const { repos, loading, live } = useGitHubRepos()
  const ref = useReveal()

  return (
    <section className="section shell reveal" id="github" ref={ref}>
      <SectionHeading
        eyebrow="Live engineering feed"
        title="Pulled from GitHub at runtime."
        copy="This section is not hard-coded. The React app calls the public GitHub API, filters Brandon’s repositories and renders the most recently updated work."
        aside={<div className={`api-status ${live ? 'is-live' : ''}`}><span />{loading ? 'Connecting…' : live ? 'Live API data' : 'Fallback data'}</div>}
      />
      <div className="github-panel">
        <div className="github-terminal">
          <div className="terminal-bar"><span/><span/><span/><small>GET /users/Brandonmunisur/repos</small></div>
          <div className="terminal-body">
            <p><b>$</b> fetch latest_repositories</p>
            <p className="terminal-muted">→ sorting by updated_at</p>
            <p className="terminal-success">✓ response parsed into React components</p>
          </div>
        </div>
        <div className="repo-list">
          {repos.map((repo) => (
            <a className="repo-row" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
              <div className="repo-icon"><GithubIcon /></div>
              <div className="repo-copy"><strong>{formatName(repo.name)}</strong><span>{repo.description || 'Software project on GitHub.'}</span></div>
              <div className="repo-meta"><span>{repo.language || 'Code'}</span><small>↗</small></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
