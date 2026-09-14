import { useReveal } from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'

const capabilities = [
  ['01', 'Frontend systems', 'Reusable React components, responsive layouts, interaction states and polished interfaces.'],
  ['02', 'API integration', 'Connecting interfaces to external services, handling async data, loading states and failure fallbacks.'],
  ['03', 'Backend thinking', 'Node.js and C# foundations with an emphasis on clean data flow, maintainability and clear boundaries.'],
  ['04', 'Problem solving', 'Breaking ambiguous problems down, debugging systematically and iterating toward simpler solutions.'],
]

export default function About() {
  const ref = useReveal()
  return (
    <section className="section shell reveal" id="about" ref={ref}>
      <SectionHeading eyebrow="How I work" title="Engineering with product awareness." copy="I care about how software behaves for the person using it—not only whether the code compiles. That means balancing structure, speed, usability and maintainability." />
      <div className="about-layout">
        <div className="about-statement">
          <p>I’m Brandon, a full-stack engineer working across modern JavaScript, React, APIs, C# and C++. I enjoy building software where technical decisions have a visible impact on the user experience.</p>
          <p>My strongest work comes from combining curiosity with structure: understand the problem, model the data, build the smallest useful version, test it and improve it.</p>
          <div className="mini-stats">
            <div><strong>Full-stack</strong><span>UI → API → data flow</span></div>
            <div><strong>Product-minded</strong><span>Useful over flashy</span></div>
            <div><strong>Always learning</strong><span>Build, review, refine</span></div>
          </div>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, copy]) => (
            <div className="capability" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  )
}
