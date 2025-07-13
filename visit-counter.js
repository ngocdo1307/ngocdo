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
  apiKey: "AIzaSyAGibQhw21VUcPINMMKWV-rosFiyr3rRAs",
  authDomain: "ngocdo1.firebaseapp.com",
  databaseURL: "https://ngocdo1-default-rtdb.firebaseio.com",
  projectId: "ngocdo1",
  storageBucket: "ngocdo1.appspot.com",
  messagingSenderId: "598746900527",
  appId: "1:598746900527:web:8231c7acd0ad49ccd7beda"
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
