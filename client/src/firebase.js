import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products 
// https://firebase.google.com/docs/web/setup#available-libraries

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-f30ff.firebaseapp.com",
  projectId: "estate-f30ff",
  storageBucket: "estate-f30ff.appspot.com",
  messagingSenderId: "749547438921",
  appId: "1:749547438921:web:6fbf66f774899d99011098"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);