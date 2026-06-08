import { MessageCircle, Sparkles } from 'lucide-react'
import { clinic } from '../config'
import { whatsappUrl } from '../lib/whatsapp'

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

export default Footer
