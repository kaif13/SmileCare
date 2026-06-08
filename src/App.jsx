import { useEffect, useState } from 'react'
import {
  ArrowRight, BadgeCheck, BadgePlus, Check, ChevronDown, Clock3, HeartPulse,
  MapPin, Menu, MessageCircle, Phone, ScanFace, ShieldCheck, Sparkles, Star,
  Stethoscope, Sun, Syringe, X,
} from 'lucide-react'
import { clinic, serviceOptions, services } from './config'
import { openWhatsApp, whatsappUrl } from './lib/whatsapp'

const saveLead = async (data) => {
  const firebase = await import('./lib/firebase')
  return firebase.saveLead(data)
}

const images = {
  hero: '/images/hero-dentist-CcKQ03H9.webp',
  doctor: '/images/doctor-profile-YSvPRYKm.webp',
  reception: '/images/clinic-reception-_lOf4hFq.webp',
  interior: '/images/clinic-interior-BDx9e7hp.webp',
  chair: '/images/dental-chair-C2g47QqD.webp',
  smile: '/images/smile-result-CKKyCItx.webp',
  sterilization: '/images/sterilization-DaJUcM4p.webp',
}

const iconMap = { Stethoscope, Sparkles, ScanFace, ShieldCheck, Sun, BadgePlus }

function Reveal({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={light ? 'text-white' : ''}>{title}</h2>
      {copy && <p className={light ? 'text-white/70' : ''}>{copy}</p>}
    </Reveal>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [['Services', '#services'], ['About', '#about'], ['Reviews', '#reviews'], ['Contact', '#contact']]
  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label={`${clinic.name} home`}>
          <span className="brand-mark"><Sparkles size={19} /></span>
          <span>{clinic.shortName}<small>Dental Studio</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="btn btn-primary nav-cta" href="#appointment"><MessageCircle size={18} /> Book on WhatsApp</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
        {open && (
          <nav className="mobile-nav">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a href="#appointment" onClick={() => setOpen(false)}>Book appointment</a>
          </nav>
        )}
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" role="img" aria-label="Smile Care dentist in a clean modern treatment room" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">Smile Care Dental Studio</span>
          <h1>Calm, expert dental care for every kind of smile.</h1>
          <p>Gentle treatment, honest guidance, and modern clinic hygiene for families, children, cosmetic care, and urgent dental concerns.</p>

          <div className="hero-notes" aria-label="Smile Care trust highlights">
            <span><Star size={16} fill="currentColor" /> 4.9 patient rating</span>
            <span><ShieldCheck size={16} /> Sterilized care rooms</span>
            <span><Clock3 size={16} /> Same-day emergency guidance</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const stats = [['12+', 'Years of care'], ['8,000+', 'Smiles treated'], ['4.9/5', 'Patient rating'], ['ISO', 'Sterilization protocol']]
  return <section className="trust-bar"><div className="container trust-grid">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
}

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

function Gallery() {
  const gallery = [
    [images.reception, 'A calm, welcoming reception'],
    [images.interior, 'Bright and private treatment spaces'],
    [images.chair, 'Modern dental technology'],
    [images.smile, 'Natural-looking smile results'],
  ]
  return (
    <section className="section gallery">
      <div className="container">
        <SectionHeading eyebrow="Inside our studio" title="Designed to put you at ease" copy="A warm, modern environment with hospital-grade hygiene standards." />
        <div className="gallery-grid">
          {gallery.map(([src, alt], i) => <Reveal className={`gallery-item gallery-${i + 1}`} delay={i * .06} key={src}><img src={src} alt={alt} loading="lazy" /><span>{alt}</span></Reveal>)}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  { quote: 'The first dentist who made me feel completely at ease. Everything was explained clearly and the treatment was genuinely comfortable.', name: 'Aarav Sharma', treatment: 'Root canal patient' },
  { quote: 'My aligner journey has been smooth from day one. The team is warm, precise, and always available when I have a question.', name: 'Riya Kapoor', treatment: 'Clear aligners' },
  { quote: 'Beautiful clinic, transparent pricing, and no rushed appointments. My whole family now comes here.', name: 'Neha Mehta', treatment: 'Family dental care' },
]

function Testimonials() {
  const [active, setActive] = useState(0)
  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <SectionHeading eyebrow="Patient stories" title="Trusted by smiles across Lucknow" />
        <div className="testimonial-shell">
          <div className="quote-mark">"</div>
            <article>
              <div className="stars">{[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}</div>
              <blockquote>{testimonials[active].quote}</blockquote>
              <strong>{testimonials[active].name}</strong><span>{testimonials[active].treatment}</span>
            </article>
          <div className="testimonial-dots">{testimonials.map((_, i) => <button className={i === active ? 'active' : ''} onClick={() => setActive(i)} key={i} aria-label={`Show review ${i + 1}`} />)}</div>
        </div>
      </div>
    </section>
  )
}

function Doctor() {
  return (
    <section className="section doctor">
      <div className="container doctor-grid">
        <Reveal className="doctor-copy">
          <span className="eyebrow">Meet your dentist</span>
          <h2>Thoughtful care starts with listening</h2>
          <p className="doctor-quote">"My job is not just to treat a tooth. It is to make sure you understand your health, feel heard, and leave more confident than you arrived."</p>
          <h3>Dr. Ananya Mehra</h3><span className="qualification">BDS, MDS - Conservative Dentistry</span>
          <p>With over 12 years of clinical experience, Dr. Mehra combines evidence-based dentistry with an especially gentle approach to anxious patients.</p>
          <div className="doctor-tags"><span><Check /> 12+ years experience</span><span><Check /> 8,000+ patients</span></div>
        </Reveal>
        <Reveal className="doctor-image"><img src={images.doctor} alt="Dr. Ananya Mehra, lead dentist" loading="lazy" /><div><BadgeCheck /><span>Lead dentist<br /><strong>SmileCare Dental</strong></span></div></Reveal>
      </div>
    </section>
  )
}

const initialBooking = { name: '', phone: '', service: '', day: '', time: '', message: '' }

function BookingForm() {
  const [data, setData] = useState(initialBooking)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (key, value) => setData(current => ({ ...current, [key]: value }))
  const submit = async (event) => {
    event.preventDefault()
    const next = {}
    if (data.name.trim().length < 2) next.name = 'Please enter your full name.'
    if (!/^[+\d][\d\s-]{8,14}$/.test(data.phone.trim())) next.phone = 'Enter a valid phone number.'
    if (!data.service) next.service = 'Choose a service.'
    if (!data.day) next.day = 'Choose a preferred day.'
    if (!data.time) next.time = 'Choose a time slot.'
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('saving')
    try {
      await saveLead({ ...data, type: 'appointment' })
      const message = `Hi ${clinic.name} 👋 I'd like to book an appointment.\n\nName: ${data.name}\nService: ${data.service}\nPreferred: ${data.day} at ${data.time}\nPhone: ${data.phone}\nNote: ${data.message || '—'}`
      setStatus(openWhatsApp(message) ? 'success' : 'blocked')
    } catch {
      setStatus('error')
    }
  }
  const field = (key, label, node) => <label className="field"><span>{label}</span>{node}{errors[key] && <small role="alert">{errors[key]}</small>}</label>
  return (
    <form className="booking-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        {field('name', 'Full name', <input value={data.name} onChange={e => set('name', e.target.value)} placeholder="Your name" autoComplete="name" />)}
        {field('phone', 'Phone number', <input value={data.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 98765 43210" inputMode="tel" autoComplete="tel" />)}
        {field('service', 'Service', <select value={data.service} onChange={e => set('service', e.target.value)}><option value="">Select a service</option>{serviceOptions.map(item => <option key={item}>{item}</option>)}</select>)}
        {field('day', 'Preferred day', <input type="date" min={new Date().toISOString().split('T')[0]} value={data.day} onChange={e => set('day', e.target.value)} />)}
        {field('time', 'Preferred time', <select value={data.time} onChange={e => set('time', e.target.value)}><option value="">Select a time</option><option>Morning (9 AM - 12 PM)</option><option>Afternoon (12 PM - 4 PM)</option><option>Evening (4 PM - 7 PM)</option></select>)}
        {field('message', 'Anything we should know? (optional)', <textarea value={data.message} onChange={e => set('message', e.target.value)} placeholder="Tell us how we can help" rows={3} />)}
      </div>
      <button className="btn btn-primary btn-large submit-button" disabled={status === 'saving'}>{status === 'saving' ? 'Saving your request...' : <><MessageCircle /> Book via WhatsApp <ArrowRight /></>}</button>
      <p className="privacy-note"><ShieldCheck /> Your details are private and used only to arrange your appointment.</p>
      {status === 'success' && <div className="form-status success" role="status"><Check /> Opening WhatsApp... Your request has been saved.</div>}
      {status === 'blocked' && <div className="form-status warning" role="status">WhatsApp was blocked by your browser. <a href={whatsappUrl(`Hi ${clinic.name}, I'd like to book an appointment.`)} target="_blank" rel="noreferrer">Open it here.</a></div>}
      {status === 'error' && <div className="form-status error" role="alert">We could not save the request. Please call us or try again.</div>}
    </form>
  )
}

function Appointment() {
  return (
    <section className="section appointment" id="appointment">
      <div className="container appointment-grid">
        <div className="appointment-copy">
          <SectionHeading eyebrow="Book your visit" title="A healthier smile starts here" light />
          <p>Tell us what works for you. We will open WhatsApp with your details ready to send, and our care coordinator will confirm the appointment.</p>
          <div className="appointment-points"><span><Check /> Quick WhatsApp confirmation</span><span><Check /> No payment required</span><span><Check /> Flexible rescheduling</span></div>
          <div className="emergency"><Phone /><div><small>Dental emergency?</small><a href={clinic.phoneLink}>{clinic.phoneDisplay}</a></div></div>
        </div>
        <Reveal><BookingForm /></Reveal>
      </div>
    </section>
  )
}

function QuickContact() {
  const [data, setData] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('')
  const submit = async (event) => {
    event.preventDefault()
    if (data.name.trim().length < 2 || !/^[+\d][\d\s-]{8,14}$/.test(data.phone.trim()) || data.message.trim().length < 3) {
      setStatus('Please complete all fields with valid details.')
      return
    }
    setStatus('Saving...')
    try {
      await saveLead({ ...data, type: 'quick-contact' })
      openWhatsApp(`Hi ${clinic.name}, I have a question.\n\nName: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`)
      setStatus('Opening WhatsApp...')
    } catch { setStatus('Could not save. Please call us directly.') }
  }
  return (
    <form className="quick-form" onSubmit={submit} noValidate>
      <h3>Ask us anything</h3><p>Leave your details and continue on WhatsApp.</p>
      <input aria-label="Name" placeholder="Your name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
      <input aria-label="Phone" placeholder="Phone number" inputMode="tel" value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} />
      <textarea aria-label="Message" placeholder="How can we help?" rows={3} value={data.message} onChange={e => setData({ ...data, message: e.target.value })} />
      <button className="btn btn-primary">Send on WhatsApp <ArrowRight /></button>
      {status && <small role="status">{status}</small>}
    </form>
  )
}

function Location() {
  return (
    <section className="section location" id="contact">
      <div className="container location-grid">
        <div className="map-card">
          <div className="map-pattern" /><div className="map-pin"><MapPin /></div>
          <span>Map placeholder</span><a href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight /></a>
        </div>
        <div className="location-details">
          <SectionHeading eyebrow="Visit the studio" title="Easy to find. Easy to feel at home." />
          <div className="contact-line"><MapPin /><div><strong>Address</strong><span>{clinic.address}</span></div></div>
          <div className="contact-line"><Clock3 /><div><strong>Opening hours</strong><table><tbody><tr><td>Mon - Fri</td><td>9:00 AM - 7:00 PM</td></tr><tr><td>Saturday</td><td>9:00 AM - 5:00 PM</td></tr><tr><td>Sunday</td><td>Emergency only</td></tr></tbody></table></div></div>
          <div className="contact-line"><Phone /><div><strong>Call us</strong><a href={clinic.phoneLink}>{clinic.phoneDisplay}</a></div></div>
        </div>
        <QuickContact />
      </div>
    </section>
  )
}

const faqs = [
  ['What should I expect on my first visit?', 'We begin with a conversation about your concerns, followed by a gentle examination and any necessary digital diagnostics. You will receive clear options before treatment begins.'],
  ['Do you accept dental insurance?', 'We provide all clinical documents and invoices needed for reimbursement. Coverage varies by provider, so please check your policy or message our team for help.'],
  ['Can I come in for a dental emergency?', 'Yes. We reserve same-day emergency slots for severe pain, swelling, trauma, or a broken tooth. Call us for the fastest response.'],
  ['How much will my treatment cost?', 'Costs depend on your diagnosis and chosen treatment. You will always receive a transparent written estimate before we proceed.'],
]

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq">
      <div className="container faq-grid">
        <div><SectionHeading eyebrow="Good to know" title="Questions, answered clearly" copy="Still wondering about something? Message our care team and we will be happy to help." /><a className="text-link" href={whatsappUrl(`Hi ${clinic.name}, I have a question about dental treatment.`)} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowRight /></a></div>
        <div className="accordion">{faqs.map(([question, answer], i) => <div className={`faq-item ${open === i ? 'open' : ''}`} key={question}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{question}</span><ChevronDown /></button>{open === i && <div><p>{answer}</p></div>}</div>)}</div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div><a href="#top" className="brand brand-light"><span className="brand-mark"><Sparkles /></span><span>{clinic.shortName}<small>Dental Studio</small></span></a><p>Gentle, modern dentistry designed around your comfort and confidence.</p><div className="socials"><a href="#" aria-label="Social media"><Sparkles /></a><a href={whatsappUrl('Hi, I have a question about dental care.')} aria-label="WhatsApp"><MessageCircle /></a></div></div>
        <div><h3>Explore</h3><a href="#services">Treatments</a><a href="#about">About us</a><a href="#reviews">Patient stories</a><a href="#appointment">Book appointment</a></div>
        <div><h3>Contact</h3><a href={clinic.phoneLink}>{clinic.phoneDisplay}</a><a href={`mailto:${clinic.email}`}>{clinic.email}</a><span>{clinic.address}</span></div>
        <div><h3>Hours</h3><span>Mon - Fri: 9 AM - 7 PM</span><span>Saturday: 9 AM - 5 PM</span><span>Sunday: Emergency only</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</span><span>Privacy · Terms</span></div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={whatsappUrl('Hi, I have a question about dental treatment.')} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><MessageCircle /><span>Chat with us</span></a>
}

function App() {
  return (
    <div>
      <Navbar /><main><Hero /><TrustBar /><Services /><About /><Gallery /><Testimonials /><Doctor /><Appointment /><Location /><FAQ /></main><Footer /><FloatingWhatsApp />
    </div>
  )
}

export default App
