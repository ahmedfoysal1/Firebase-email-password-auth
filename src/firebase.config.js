// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwXix1Oyip6eom6Hbpt7R1CdNHYcZE19o",
  authDomain: "moha-milon-auth-5ae7e.firebaseapp.com",
  projectId: "moha-milon-auth-5ae7e",
  storageBucket: "moha-milon-auth-5ae7e.firebasestorage.app",
  messagingSenderId: "214070852798",
  appId: "1:214070852798:web:67c70433ebc22346f4f2ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;