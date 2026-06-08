import { useState } from 'react'
import { ArrowRight, Check, MessageCircle, ShieldCheck } from 'lucide-react'
import { clinic, serviceOptions } from '../config'
import { openWhatsApp, whatsappUrl } from '../lib/whatsapp'

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
    const message = `Hi ${clinic.name}, I'd like to book an appointment.\n\nName: ${data.name}\nService: ${data.service}\nPreferred: ${data.day} at ${data.time}\nPhone: ${data.phone}\nNote: ${data.message || '-'}`
    setStatus(openWhatsApp(message) ? 'success' : 'blocked')
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
      <p className="privacy-note"><ShieldCheck /> Your details are private and only shared through your WhatsApp message.</p>
      {status === 'success' && <div className="form-status success" role="status"><Check /> Opening WhatsApp... Please send the prepared message.</div>}
      {status === 'blocked' && <div className="form-status warning" role="status">WhatsApp was blocked by your browser. <a href={whatsappUrl(`Hi ${clinic.name}, I'd like to book an appointment.`)} target="_blank" rel="noreferrer">Open it here.</a></div>}
    </form>
  )
}

export default BookingForm
