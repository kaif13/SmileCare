import Reveal from './Reveal'

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={light ? 'text-white' : ''}>{title}</h2>
      {copy && <p className={light ? 'text-white/70' : ''}>{copy}</p>}
    </Reveal>
  )
}

export default SectionHeading
