import { Check, Phone } from 'lucide-react'
import { clinic } from '../config'
import BookingForm from './BookingForm'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

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

export default Appointment
