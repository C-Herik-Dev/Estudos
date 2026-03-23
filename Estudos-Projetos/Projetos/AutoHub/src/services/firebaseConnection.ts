import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDVcj_HVDgdZQmG24cgT5AEP_4fYFg5RaI",
  authDomain: "autohub-c1b23.firebaseapp.com",
  projectId: "autohub-c1b23",
  storageBucket: "autohub-c1b23.firebasestorage.app",
  messagingSenderId: "341731600231",
  appId: "1:341731600231:web:8a1ae7055b3f8fcaf471c2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage}