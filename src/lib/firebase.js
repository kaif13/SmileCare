import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const isConfigured = Object.values(firebaseConfig).every(Boolean)
const db = isConfigured ? getFirestore(initializeApp(firebaseConfig)) : null

export async function saveLead(data) {
  if (!db) {
    console.info('Firebase is not configured; continuing with WhatsApp only.')
    return
  }

  // Every enquiry is written before WhatsApp opens, giving the clinic a durable lead record.
  await addDoc(collection(db, 'leads'), {
    ...data,
    source: 'website',
    createdAt: serverTimestamp(),
  })
}
