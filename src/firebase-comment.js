import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS1407epe5nOlM27CmDA2rx-nONEqfL3M",
  authDomain: "evans-personal-portfolio-87bdc.firebaseapp.com",
  projectId: "evans-personal-portfolio-87bdc",
  storageBucket: "evans-personal-portfolio-87bdc.firebasestorage.app",
  messagingSenderId: "505508860388",
  appId: "1:505508860388:web:d75f44b695035ba0fff7f1",
  measurementId: "G-S51GC899SZ"
};

// Initialize Firebase with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { db, storage, collection, addDoc, analytics };