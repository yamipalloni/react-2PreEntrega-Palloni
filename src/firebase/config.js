// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB79bVPZbIxXzRrIQ8Eg3ftVdc_ODjvmgA",
  authDomain: "coderhouse-2b4e7.firebaseapp.com",
  projectId: "coderhouse-2b4e7",
  storageBucket: "coderhouse-2b4e7.appspot.com",
  messagingSenderId: "532275224744",
  appId: "1:532275224744:web:85d5d3de1af128b91c229d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);