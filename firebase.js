// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoAKcutcnU_ZF7uNUSGaORnyNzlBtpO70",
  authDomain: "task-week-7.firebaseapp.com",
  projectId: "task-week-7",
  storageBucket: "task-week-7.firebasestorage.app",
  messagingSenderId: "305874154057",
  appId: "1:305874154057:web:6b70fb7152a47c25394598"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);