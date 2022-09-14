import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYNxSlMVrtSH6LWlqvOKy8xulf7TVLG3s",
  authDomain: "rimoldi-web.firebaseapp.com",
  projectId: "rimoldi-web",
  storageBucket: "rimoldi-web.appspot.com",
  messagingSenderId: "763618973998",
  appId: "1:763618973998:web:ebb4f42a10ff1b414342bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)