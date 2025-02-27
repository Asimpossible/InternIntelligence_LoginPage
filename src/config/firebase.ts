import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDudLLOnnOGjM3yYgOULMBQt09Jx_74kn4",
  authDomain: "internintelligence-login-2a6a5.firebaseapp.com",
  projectId: "internintelligence-login-2a6a5",
  storageBucket: "internintelligence-login-2a6a5.firebasestorage.app",
  messagingSenderId: "622289338000",
  appId: "1:622289338000:web:638ada8a62944974be6215",
  measurementId: "G-XC21FZKVHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
