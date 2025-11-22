import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // ✅ Needed for login

// Firebase Config (keep yours)
const firebaseConfig = {
  projectId: "studio-3793875319-a9935",
  appId: "1:905575216290:web:fcd38450551f51b66593fb",
  apiKey: "AIzaSyC4deJ6wLnq1d6ExgZZRY0C9AAAS6zIM_0",
  authDomain: "studio-3793875319-a9935.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "905575216290"
};

// Initialize app once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Services
export const db = getFirestore(app);
export const auth = getAuth(app); // 🔥 export auth

export default app;
