import { useRef } from 'react'
import { ExternalIcon, GithubIcon } from './Icons.jsx'

export default function ProjectCard({ project, index }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const card = ref.current
    if (!card || window.matchMedia('(pointer: coarse)').matches) return
    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    card.style.setProperty('--rx', `${-y * 4}deg`)
    card.style.setProperty('--ry', `${x * 5}deg`)
    card.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    card.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }

  const reset = () => {
    const card = ref.current
    if (!card) return
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  return (
    <article className={`project-card ${project.featured ? 'project-featured' : ''} ${project.title === 'Please & Thank You' ? 'project-fit-contain' : ''}`} ref={ref} onMouseMove={handleMove} onMouseLeave={reset}>
      <div className="project-media">
        <div className="browser-bar"><span/><span/><span/><small>{project.title.toLowerCase().replaceAll(' ', '-')}.app</small></div>
        <img src={project.image} alt={`${project.title} interface`} />
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-content">
        <p className="project-label">{project.label}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-actions">
          <a href={project.live} target="_blank" rel="noreferrer">Live product <ExternalIcon /></a>
          <a href={project.github} target="_blank" rel="noreferrer"><GithubIcon /> Source</a>
        </div>
      </div>
    </article>
  )
}
