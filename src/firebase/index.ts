// src/firebase/index.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "studio-3793875319-a9935",
  appId: "1:905575216290:web:fcd38450551f51b66593fb",
  apiKey: "AIzaSyC4deJ6wLnq1d6ExgZZRY0C9AAAS6zIM_0",
  authDomain: "studio-3793875319-a9935.firebaseapp.com",
  messagingSenderId: "905575216290",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
