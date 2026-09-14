import { stack } from '../data/projects.js'

export default function StackMarquee() {
  const items = [...stack, ...stack]
  return (
    <div className="marquee-wrap" id="stack" aria-label="Technology stack">
      <div className="marquee-track">
        {items.map((item, index) => <span key={`${item}-${index}`}><i>◆</i>{item}</span>)}
      </div>
    </div>
  )
}
