import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'

const testimonials = [
  { quote: 'The first dentist who made me feel completely at ease. Everything was explained clearly and the treatment was genuinely comfortable.', name: 'Aarav Sharma', treatment: 'Root canal treatment', initials: 'AS' },
  { quote: 'My aligner journey has been smooth from day one. The team is warm, precise, and always available when I have a question.', name: 'Riya Kapoor', treatment: 'Clear aligners', initials: 'RK' },
  { quote: 'Beautiful clinic, transparent pricing, and no rushed appointments. My whole family now comes here.', name: 'Neha Mehta', treatment: 'Family dental care', initials: 'NM' },
]

function Testimonials() {
  return (
    <section className="section testimonials" id="reviews">
      <div className="container testimonials-grid">
        <div className="reviews-intro">
          <SectionHeading eyebrow="Patient stories" title="Care patients feel comfortable recommending" copy="Thoughtful visits, clear explanations, and dentistry that respects each patient's pace." />
          <div className="review-score" aria-label="Smile Care patient rating">
            <strong>4.9</strong>
            <div>
              <div className="stars">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={17} fill="currentColor" />)}</div>
              <span>Average patient rating from 350+ local reviews</span>
            </div>
          </div>
        </div>
        <div className="review-cards">
          {testimonials.map(({ quote, name, treatment, initials }) => (
            <article className="review-card" key={name}>
              <div className="review-card-top">
                <span className="review-avatar">{initials}</span>
                <div><strong>{name}</strong><small>{treatment}</small></div>
              </div>
              <p>{quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
