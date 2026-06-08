import { BadgeCheck, Check } from 'lucide-react'
import { images } from '../constants/images'
import Reveal from './Reveal'

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

export default Doctor
