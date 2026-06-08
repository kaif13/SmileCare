import { ArrowRight, BadgePlus, ScanFace, ShieldCheck, Sparkles, Stethoscope, Sun } from 'lucide-react'
import { clinic, services } from '../config'
import { whatsappUrl } from '../lib/whatsapp'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const iconMap = { Stethoscope, Sparkles, ScanFace, ShieldCheck, Sun, BadgePlus }

function Services() {
  const book = (service) => whatsappUrl(`Hi ${clinic.name}, I'd like to book a ${service} appointment. Please share the available slots.`)

  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading eyebrow="Complete dental care" title="Everything your smile needs" copy="Personalized treatment plans, clear guidance, and gentle care at every step." />
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal className="service-card" delay={(index % 3) * 0.07} key={service.name}>
                <div className="service-icon"><Icon /></div>
                <h3>{service.name}</h3><p>{service.benefit}</p>
                <a href={book(service.name)} target="_blank" rel="noreferrer">Book this <ArrowRight size={16} /></a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
