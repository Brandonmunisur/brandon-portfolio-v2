import { useEffect, useState } from 'react'
import { projects } from '../data/projects.js'

export default function ProjectShowcase() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const project = projects[current]

  return (
    <div className="project-showcase">
      <div className="showcase-card" key={project.title}>
        <div className="showcase-browser">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <span className="browser-title">
            Featured project
          </span>
        </div>

        <div className="showcase-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="showcase-image"
          />

          <div className="showcase-gradient" />
        </div>

        <div className="showcase-info">
          <div className="showcase-number">
            {String(current + 1).padStart(2, '0')}
            <span>/</span>
            {String(projects.length).padStart(2, '0')}
          </div>

          <p>{project.label}</p>

          <h3>{project.title}</h3>

          <div className="showcase-stack">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="showcase-dots">
        {projects.map((item, index) => (
          <button
            key={item.title}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
            aria-label={`Show ${item.title}`}
          />
        ))}
      </div>
    </div>
  )
}