import { useEffect, useState } from 'react'
import { Menu, MessageCircle, Sparkles, X } from 'lucide-react'
import { clinic } from '../config'

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

export default Navbar
