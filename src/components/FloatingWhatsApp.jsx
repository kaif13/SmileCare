import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../lib/whatsapp'

function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={whatsappUrl('Hi, I have a question about dental treatment.')} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><MessageCircle /><span>Chat with us</span></a>
}

export default FloatingWhatsApp
