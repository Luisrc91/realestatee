// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estatereal.firebaseapp.com",
  projectId: "mern-estatereal",
  storageBucket: "mern-estatereal.appspot.com",
  messagingSenderId: "735507354466",
  appId: "1:735507354466:web:1da2ee553f6541882cd23b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);