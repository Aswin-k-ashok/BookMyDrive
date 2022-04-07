import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyArA1060HWBJ9PO8n3Iuc11NOwU3pzMg1k',
  authDomain: 'bmdimageupload.firebaseapp.com',
  projectId: 'bmdimageupload',
  storageBucket: 'bmdimageupload.appspot.com',
  messagingSenderId: '956400775743',
  appId: '1:956400775743:web:3853e819ebf81e15203e8a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

// const firebaseConfig = {
//   apiKey: FIRE_BASE_API_KEY,
//   authDomain: APP_NAME.firebaseapp.com,
//   projectId: APP_NAME,
//   storageBucket: APP_NAME.appspot.com,
//   messagingSenderId: MESSAGESENDER_ID,
//   appId:APP_ID
// }

// const app = initializeApp(firebaseConfig)
// export const storage = getStorage(app)
