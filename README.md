# SmileCare Dental Studio

A mobile-first React JavaScript and Tailwind CSS website focused on appointment bookings and WhatsApp leads.

## Setup

```bash
npm install
copy .env.example .env
npm run dev
```

Before launch, edit `src/config.js` with the clinic name, phone, address and contact details. Set `VITE_WHATSAPP_NUMBER` in `.env` using international format without `+` or spaces.

## Firebase leads

1. Create a Firebase project and web app.
2. Enable Firestore Database.
3. Copy the web app values into `.env`.
4. Add Firestore rules appropriate for your production environment.

Both forms save documents to the `leads` collection before opening WhatsApp. The website still opens WhatsApp when Firebase is intentionally left unconfigured.

## Content and images

- Edit services, contact details and brand settings in `src/config.js`.
- Edit page copy and placeholder team/review data in `src/App.jsx`.
- Replace images in `public/images`, then update the paths at the top of `src/App.jsx`.
- Update SEO and Dentist JSON-LD details in `index.html`.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

The hero uses static local clinic imagery and does not use animation.
