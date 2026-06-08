import { clinic } from '../config'

export function whatsappUrl(message) {
  // wa.me requires an international number without "+" and a URL-encoded message.
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message) {
  const popup = window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  return Boolean(popup)
}
