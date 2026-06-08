import { Clock3, ShieldCheck, Star } from 'lucide-react'

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

export default Hero
