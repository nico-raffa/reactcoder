import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDsZuVWKS7r2Fr2hmc5s9bRLAPI6G9M50s",
  authDomain: "raffa-tools.firebaseapp.com",
  projectId: "raffa-tools",
  storageBucket: "raffa-tools.appspot.com",
  messagingSenderId: "688321958757",
  appId: "1:688321958757:web:d2fdd223df357dd51ac78c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)