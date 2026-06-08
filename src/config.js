export const clinic = {
  name: 'SmileCare Dental Studio',
  shortName: 'SmileCare',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210',
  phoneDisplay: '+91 98765 43210',
  phoneLink: 'tel:+919876543210',
  email: 'care@smilecaredental.in',
  address: '24 Park Road, Hazratganj, Lucknow, Uttar Pradesh',
  accent: '#0E7C86',
}

export const services = [
  { name: 'Dental Checkup', benefit: 'A gentle, complete oral health assessment.', icon: 'Stethoscope' },
  { name: 'Teeth Cleaning', benefit: 'A fresher, healthier smile in one comfortable visit.', icon: 'Sparkles' },
  { name: 'Braces & Aligners', benefit: 'Discreet plans designed around your lifestyle.', icon: 'ScanFace' },
  { name: 'Root Canal', benefit: 'Relief from pain with precision and patient-first care.', icon: 'ShieldCheck' },
  { name: 'Teeth Whitening', benefit: 'Clinically guided brightening that looks natural.', icon: 'Sun' },
  { name: 'Dental Implants', benefit: 'Confident, lasting replacements for missing teeth.', icon: 'BadgePlus' },
]

export const serviceOptions = [
  'Checkup',
  'Cleaning',
  'Braces/Aligners',
  'Root Canal',
  'Whitening',
  'Implants',
  'Emergency',
]
