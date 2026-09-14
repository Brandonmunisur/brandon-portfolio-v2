import RoleTicker from './RoleTicker.jsx'
import { ArrowIcon,  GithubIcon } from './Icons.jsx'
import ProjectShowcase from './ProjectShowcase.jsx'

const profile = 'https://raw.githubusercontent.com/Brandonmunisur/react-portfolio/main-Brandon/src/assets/images/B-pic2.jpeg'

export default function Hero() {
  return (
    <section className="hero shell" id="home">
      <div className="hero-copy">
        <div className="availability-pill"><span className="status-dot" /> Open to software opportunities</div>
        <p className="kicker">Hello, I’m Brandon Munisur — <RoleTicker /></p>
        <h1>
          I build <span>full-stack products</span> that feel clear, fast and useful.
        </h1>
        <p className="hero-lead">
          From responsive React interfaces to API-driven applications, I turn real problems into maintainable software with thoughtful UX and clean engineering.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <ArrowIcon /></a>
          <a className="button button-ghost" href="https://github.com/Brandonmunisur" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
        </div>
        <div className="hero-meta">
          <div><strong>Frontend</strong><span>React · JavaScript · Responsive UI</span></div>
          <div><strong>Backend</strong><span>Node.js · C# · REST APIs</span></div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <ProjectShowcase />
        <div className="floating-card api-card">
          <span className="floating-label">API response</span>
          <code><i>200</i> {'{'} status: <b>"ready"</b> {'}'}</code>
        </div>
        <div className="floating-card stack-card">
          <span className="pulse" /> React + Node.js + C#
        </div>
      </div>
    </section>
  )
}
