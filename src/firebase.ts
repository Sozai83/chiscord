import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { appendFile } from "fs/promises";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLB8aAGaAmjuZm-V_hvAfsSIJoBxRr6sU",
  authDomain: "chiscord-de103.firebaseapp.com",
  projectId: "chiscord-de103",
  storageBucket: "chiscord-de103.appspot.com",
  messagingSenderId: "752221262368",
  appId: "1:752221262368:web:e0844e6e54e51982c0a245",
  measurementId: "G-8H1FWQPFT1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
