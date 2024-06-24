// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
googleProvider.addScope('profile')
googleProvider.addScope('email')

export const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'popup' })
facebookProvider.addScope('email')
facebookProvider.addScope('user_location')