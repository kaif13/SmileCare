import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react'
import { clinic } from '../config'
import QuickContact from './QuickContact'
import SectionHeading from './SectionHeading'

function Location() {
  return (
    <section className="section location" id="contact">
      <div className="container location-grid">
        <div className="map-card">
          <div className="map-pattern" /><div className="map-pin"><MapPin /></div>
          <span>Map placeholder</span><a href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight /></a>
        </div>
        <div className="location-details">
          <SectionHeading eyebrow="Visit the studio" title="Easy to find. Easy to feel at home." />
          <div className="contact-line"><MapPin /><div><strong>Address</strong><span>{clinic.address}</span></div></div>
          <div className="contact-line"><Clock3 /><div><strong>Opening hours</strong><table><tbody><tr><td>Mon - Fri</td><td>9:00 AM - 7:00 PM</td></tr><tr><td>Saturday</td><td>9:00 AM - 5:00 PM</td></tr><tr><td>Sunday</td><td>Emergency only</td></tr></tbody></table></div></div>
          <div className="contact-line"><Phone /><div><strong>Call us</strong><a href={clinic.phoneLink}>{clinic.phoneDisplay}</a></div></div>
        </div>
        <QuickContact />
      </div>
    </section>
  )
}

export default Location
