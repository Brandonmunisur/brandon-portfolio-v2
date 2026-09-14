import { projects } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const ref = useReveal()
  return (
    <section className="section shell reveal" id="work" ref={ref}>
      <SectionHeading
        eyebrow="Selected work"
        title="Projects that show how I think and build."
        copy="A portfolio should prove more than syntax. These projects demonstrate product thinking, component structure and the ability to turn a workflow into a usable interface."
        aside={<a className="text-link" href="https://github.com/Brandonmunisur" target="_blank" rel="noreferrer">All repositories ↗</a>}
      />
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  )
}
