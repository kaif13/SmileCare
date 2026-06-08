# SmileCare Dental Studio

A mobile-first React JavaScript and Tailwind CSS website focused on appointment bookings through WhatsApp.

## Setup

```bash
npm install
copy .env.example .env
npm run dev
```

Before launch, edit `src/config.js` with the clinic name, phone, address and contact details. Set `VITE_WHATSAPP_NUMBER` in `.env` using international format without `+` or spaces.

## WhatsApp leads

The appointment and quick-contact forms prepare a WhatsApp message with the visitor's details. No Firebase or database setup is required.

## Content and images

- Edit services, contact details and brand settings in `src/config.js`.
- Edit page sections in `src/components`.
- Replace images in `public/images`, then update shared paths in `src/constants/images.js`.
- Update SEO and Dentist JSON-LD details in `index.html`.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

The hero uses static local clinic imagery and does not use animation.
