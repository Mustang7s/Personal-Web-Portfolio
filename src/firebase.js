// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS1407epe5nOlM27CmDA2rx-nONEqfL3M",
  authDomain: "evans-personal-portfolio-87bdc.firebaseapp.com",
  projectId: "evans-personal-portfolio-87bdc",
  storageBucket: "evans-personal-portfolio-87bdc.firebasestorage.app",
  messagingSenderId: "505508860388",
  appId: "1:505508860388:web:d75f44b695035ba0fff7f1",
  measurementId: "G-S51GC899SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);