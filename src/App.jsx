import { useCallback, useState } from 'react'
import About from './components/About'
import Appointment from './components/Appointment'
import Doctor from './components/Doctor'
import FAQ from './components/FAQ'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Services from './components/Services'
import StartupAnimation from './components/StartupAnimation'
import Testimonials from './components/Testimonials'

function App() {
  const [isStarting, setIsStarting] = useState(true)
  const finishStartup = useCallback(() => setIsStarting(false), [])

  return (
    <div>
      {isStarting && <StartupAnimation onComplete={finishStartup} />}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Doctor />
        <Appointment />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
