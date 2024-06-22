// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVz7wO2t8hmC0brFo_3FGU2z7_l5QeolQ",
  authDomain: "moloka-i-page.firebaseapp.com",
  projectId: "moloka-i-page",
  storageBucket: "moloka-i-page.appspot.com",
  messagingSenderId: "937101127698",
  appId: "1:937101127698:web:5fd665622f2aac2c5ee8cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)