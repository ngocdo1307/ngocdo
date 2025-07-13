// visit-counter.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  set
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ✅ Thông tin Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyCEjYts4d4zjsnGpFIGvAm-G5lmXMkCfsk",
    authDomain: "bodemtruycap.firebaseapp.com",
    databaseURL: "https://bodemtruycap-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bodemtruycap",
    storageBucket: "bodemtruycap.firebasestorage.app",
    messagingSenderId: "988148784519",
    appId: "1:988148784519:web:8036c73f8c24122b9cc722",
    measurementId: "G-D1ZWL1PPKY"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const visitRef = ref(db, "visitCount");

get(visitRef).then((snapshot) => {
  let count = snapshot.exists() ? snapshot.val() : 0;
  count++;
  set(visitRef, count);

  const visitSpan = document.getElementById("visitCount");
  if (visitSpan) {
    visitSpan.innerText = count;
  }
});
