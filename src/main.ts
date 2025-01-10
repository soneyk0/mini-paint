import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { VueFire } from 'vuefire'
import router from './appRoutes/router.ts'
import store from './store.ts'

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
})

export const db = getFirestore(firebaseApp)

createApp(App)
  .use(store)
  .use(VueFire, { firebaseApp })
  .use(router)
  .mount('#app')
