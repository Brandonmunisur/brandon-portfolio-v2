import { GithubIcon } from './Icons.jsx'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="brand" href="#home" aria-label="Brandon Munisur home">
          <span className="brand-mark">BM</span>
          <span className="brand-copy">
            <strong>Brandon Munisur</strong>
            <span>Full Stack Engineer</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#github">GitHub</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-actions">
          <a className="icon-link" href="https://github.com/Brandonmunisur" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a className="nav-cta" href="#contact">Let’s talk</a>
        </div>
      </div>
    </header>
  )
}
