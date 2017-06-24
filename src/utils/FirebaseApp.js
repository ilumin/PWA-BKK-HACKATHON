import Firebase from 'firebase'
import { config } from '@/firebase.config'

const firebaseApp = Firebase.initializeApp(config)

export const db = firebaseApp.database()
