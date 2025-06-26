import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

// Kiểm tra xem đã đăng nhập chưa
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("welcome-email").textContent = `Đăng nhập bằng: ${user.email}`;
  } else {
    // Nếu chưa đăng nhập, quay về trang login
    window.location.href = "index.html";
  }
});

// Đăng xuất
document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Đã đăng xuất!");
    window.location.href = "index.html";
  });
});
