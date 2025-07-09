import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "application/json; charset=utf-8");
  const firebaseConfig = {
    apiKey: "AIzaSyBperuUWtP36lO_cRyGYSxuiTkhpy54F_Q",
    authDomain: "myvue3-e45b9.firebaseapp.com",
    projectId: "myvue3-e45b9",
    storageBucket: "myvue3-e45b9.firebasestorage.app",
    messagingSenderId: "439732498123",
    appId: "1:439732498123:web:46d43d1cb409e8678c754e",
    measurementId: "G-80R2D8D149",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const myvue3foodCollection = collection(db, "myvue3food");

  const snapshot = await getDocs(myvue3foodCollection);
  const documents = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return {
    myvue3food: documents,
  };
});
