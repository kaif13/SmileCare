import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { clinic } from '../config'
import { whatsappUrl } from '../lib/whatsapp'
import SectionHeading from './SectionHeading'

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

export default FAQ
