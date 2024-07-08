// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2915b.firebaseapp.com",
  projectId: "mern-blog-2915b",
  storageBucket: "mern-blog-2915b.appspot.com",
  messagingSenderId: "564330773204",
  appId: "1:564330773204:web:993b9e85f45e27738dd941"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
