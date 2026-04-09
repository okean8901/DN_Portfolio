// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBo7lLPwuIj0gZfh2LN8byHQ816Yyxi3Pg",
  authDomain: "duongnguyenportfolio.firebaseapp.com",
  projectId: "duongnguyenportfolio",
  storageBucket: "duongnguyenportfolio.firebasestorage.app",
  messagingSenderId: "775103024718",
  appId: "1:775103024718:web:ec4e1ba21151ca5bfe3d1f",
  measurementId: "G-952L03L18F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
export default db;