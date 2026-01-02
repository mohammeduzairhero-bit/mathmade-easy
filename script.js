// 🔥 Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔁 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCkfMTu6MwqiGcKEhZLMD1hBA_KOtMJBQ8",
  authDomain: "mathmade-easy.firebaseapp.com",
  projectId: "mathmade-easy",
  storageBucket: "mathmade-easy.firebasestorage.app",
  messagingSenderId: "837096871206",
  appId: "1:837096871206:web:cfdd73794a50a7e25adde7"
};

// 🔥 Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ OPEN FORM
window.openForm = function () {
  document.getElementById("formPopup").style.display = "block";
};

// ✅ CLOSE FORM
window.closeForm = function () {
  document.getElementById("formPopup").style.display = "none";
};

// ✅ SUBMIT FORM
window.sendRequest = async function () {
  const data = {
    studentName: document.getElementById("studentName").value.trim(),
    studentClass: document.getElementById("studentClass").value.trim(),
    parentEmail: document.getElementById("parentEmail").value.trim(),
    parentPhone: document.getElementById("parentPhone").value.trim(),
    country: document.getElementById("country").value.trim(),
    timezone: document.getElementById("timezone").value.trim(),
    date: document.getElementById("classDate").value,
    time: document.getElementById("classTime").value,
    createdAt: serverTimestamp()
  };

  // ✅ Validation
  for (let key in data) {
    if (!data[key]) {
      alert("⚠️ Please fill all details");
      return;
    }
  }

  try {
    // 🔥 Save to Firestore
    await addDoc(collection(db, "demoRequests"), data);
    alert("✅ Demo request submitted!");

    // 📱 WhatsApp
    const yourPhone = "918892193291";
    const message =
      `📘 Math Made Easy Demo Request\n\n` +
      `👦 Student: ${data.studentName}\n` +
      `🏫 Class: ${data.studentClass}\n` +
      `📞 Phone: ${data.parentPhone}\n` +
      `🌍 Country: ${data.country}\n` +
      `🕒 Time: ${data.time}`;

    const encodedMsg = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `https://wa.me/${yourPhone}?text=${encodedMsg}`;
    } else {
      window.open(
        `https://web.whatsapp.com/send?phone=${yourPhone}&text=${encodedMsg}`,
        "_blank"
      );
    }

    // 🔄 Reset & close
    document.querySelectorAll("#formPopup input").forEach(i => i.value = "");
    closeForm();

  } catch (error) {
    console.error(error);
    alert("❌ Failed to submit request. Try again.");
  }
};

