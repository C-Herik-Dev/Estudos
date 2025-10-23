import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZI5_AvlXhEVMfuj7WMEa020jbVKQv7sw",
  authDomain: "curso-sujeito-programado-c3b20.firebaseapp.com",
  projectId: "curso-sujeito-programado-c3b20",
  storageBucket: "curso-sujeito-programado-c3b20.firebasestorage.app",
  messagingSenderId: "916765564685",
  appId: "1:916765564685:web:58b16fd0904a45616eda44",
  measurementId: "G-MQEWKR4Y3C"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };