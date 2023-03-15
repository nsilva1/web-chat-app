// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPVve9GBH_Z2nZqd12V72D8O8LJL16-Fs",
  authDomain: "web-chat-app-a3687.firebaseapp.com",
  projectId: "web-chat-app-a3687",
  storageBucket: "web-chat-app-a3687.appspot.com",
  messagingSenderId: "794725558090",
  appId: "1:794725558090:web:b2219466b266a3f76543b3",
  measurementId: "G-K3D0EBRKL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)