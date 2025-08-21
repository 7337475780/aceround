import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmYpj_BucguEZlaoDqa01y8CWFeae6fpc",
  authDomain: "aceround-3599a.firebaseapp.com",
  projectId: "aceround-3599a",
  storageBucket: "aceround-3599a.firebasestorage.app",
  messagingSenderId: "859872713827",
  appId: "1:859872713827:web:c4ea06979248c6b17dac56",
  measurementId: "G-4HZ5JKSFB1",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
