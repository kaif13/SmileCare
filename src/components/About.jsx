import { BadgeCheck, Clock3, HeartPulse, Syringe } from 'lucide-react'
import { images } from '../constants/images'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function About() {
  const points = [
    [HeartPulse, 'Comfort-led treatment', 'Calm communication and gentle techniques for anxious patients.'],
    [Syringe, 'Modern technology', 'Digital diagnostics and precision equipment for confident decisions.'],
    [BadgeCheck, 'Transparent pricing', 'Clear treatment options and costs before your care begins.'],
    [Clock3, 'Flexible appointments', 'Convenient weekday and Saturday slots for busy schedules.'],
  ]

  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal className="about-image-wrap">
          <img src={images.hero} alt="Dentist speaking reassuringly with a patient" loading="lazy" />
          <div className="experience-badge"><strong>12</strong><span>years of<br />trusted care</span></div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Care that feels different" title="Clinical excellence, without the clinical anxiety" copy="We take time to listen, explain every option, and make each visit feel unhurried." />
          <div className="feature-list">
            {points.map(([Icon, title, copy], index) => (
              <Reveal className="feature" delay={index * .06} key={title}><span><Icon /></span><div><h3>{title}</h3><p>{copy}</p></div></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
