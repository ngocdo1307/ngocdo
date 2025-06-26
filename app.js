import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔐 Firebase config của bạn
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

// Xử lý Đăng nhập
document.getElementById("btn-login").addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => alert("✅ Đăng nhập thành công!"))
    .catch(err => alert("❌ Lỗi đăng nhập: " + err.message));
});

// Xử lý hiển thị form đăng ký
document.getElementById("show-register").addEventListener("click", () => {
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("show-register").style.display = "none";
});

// Xử lý Đăng ký
document.getElementById("btn-register").addEventListener("click", () => {
  const email = document.getElementById("reg-email").value;
  const pass = document.getElementById("reg-pass").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => alert("✅ Đăng ký thành công!"))
    .catch(err => alert("❌ Lỗi đăng ký: " + err.message));
});
