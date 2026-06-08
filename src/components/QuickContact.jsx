import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { clinic } from '../config'
import { openWhatsApp } from '../lib/whatsapp'

function QuickContact() {
  const [data, setData] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    if (data.name.trim().length < 2 || !/^[+\d][\d\s-]{8,14}$/.test(data.phone.trim()) || data.message.trim().length < 3) {
      setStatus('Please complete all fields with valid details.')
      return
    }
    openWhatsApp(`Hi ${clinic.name}, I have a question.\n\nName: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`)
    setStatus('Opening WhatsApp...')
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

export default QuickContact
