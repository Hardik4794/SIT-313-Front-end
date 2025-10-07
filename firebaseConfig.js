// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_zTA_mclu9Ldv2Gx7zQ9teiH21IXZf_I",
  authDomain: "task8-bc4e0.firebaseapp.com",
  projectId: "task8-bc4e0",
  storageBucket: "task8-bc4e0.firebasestorage.app",
  messagingSenderId: "320335210575",
  appId: "1:320335210575:web:1348ea20440efd20aae23a",
  measurementId: "G-T62DN8M4WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the Firestore database correctly
export const db = getFirestore(app);
