// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi1uP04L87LLAHwU8vH5MDXdoQyb6pluI",
  authDomain: "uber-next-app.firebaseapp.com",
  projectId: "uber-next-app",
  storageBucket: "uber-next-app.appspot.com",
  messagingSenderId: "799266894898",
  appId: "1:799266894898:web:ef4aa3a5294967ae6db82b",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
