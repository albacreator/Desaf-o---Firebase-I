// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9uAxr9y_M34QqhSzdhVM09QIu5OMTRXg",
  authDomain: "proyectovue-f0d3c.firebaseapp.com",
  projectId: "proyectovue-f0d3c",
  storageBucket: "proyectovue-f0d3c.appspot.com",
  messagingSenderId: "245338275872",
  appId: "1:245338275872:web:39d4ab3d557330fb573c45"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };
