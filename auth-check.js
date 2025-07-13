// auth-check.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔑 Sử dụng chung config Firebase của bạn:
const firebaseConfig = {
  apiKey: "AIzaSyAGibQhw21VUcPINMMKWV-rosFiyr3rRAs",
  authDomain: "ngocdo1.firebaseapp.com",
  projectId: "ngocdo1",
  storageBucket: "ngocdo1.firebasestorage.app",
  messagingSenderId: "598746900527",
  appId: "1:598746900527:web:8231c7acd0ad49ccd7beda"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Kiểm tra đăng nhập
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html"; // chưa đăng nhập thì văng về login
  }
});
