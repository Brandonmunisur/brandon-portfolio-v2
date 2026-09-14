export default function SectionHeading({ eyebrow, title, copy, aside }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
      {aside}
    </div>
  )
}
