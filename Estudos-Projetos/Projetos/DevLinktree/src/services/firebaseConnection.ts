import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBjVlaRfrO3XyWIID2oxGcqc7N0n5stJ-M",
  authDomain: "reactlinks-daef7.firebaseapp.com",
  projectId: "reactlinks-daef7",
  storageBucket: "reactlinks-daef7.firebasestorage.app",
  messagingSenderId: "151595786522",
  appId: "1:151595786522:web:26d4a5985ad8a9f506cca3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {db, auth};