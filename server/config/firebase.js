import{initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import dotenv from 'dotenv'


dotenv.config()
//Ver el minuto 10:14 del video
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    prokectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messaginSenderId: process.env.MESSAGIN_SENDER_ID,
    appId: process.env.APP_ID
}

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)