// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUg-hPa17Lsxqpg7RIRM7BAhhi9ASr8JE",
  authDomain: "feedback-form-356723.firebaseapp.com",
  projectId: "feedback-form-356723",
  storageBucket: "feedback-form-356723.appspot.com",
  messagingSenderId: "627553877847",
  appId: "1:627553877847:web:f3b797d634a1119f9fc812",
  measurementId: "G-MB7KF7X602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}