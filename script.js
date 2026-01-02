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

// 🖱️ Cursor Movement
document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
});

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
  // Get raw values first for validation
  const studentName = document.getElementById("studentName").value.trim();
  const studentClass = document.getElementById("studentClass").value.trim();
  const parentEmail = document.getElementById("parentEmail").value.trim();
  const parentPhone = document.getElementById("parentPhone").value.trim();
  const country = document.getElementById("country").value.trim();
  const timezone = document.getElementById("timezone").value.trim();
  const classDate = document.getElementById("classDate").value;
  const classTime = document.getElementById("classTime").value;

  // ✅ Validation (Check before creating Firebase timestamp)
  if (!studentName || !studentClass || !parentEmail || !parentPhone || !country || !timezone || !classDate || !classTime) {
    alert("⚠️ Please fill all details");
    return;
  }

  const data = {
    studentName,
    studentClass,
    parentEmail,
    parentPhone,
    country,
    timezone,
    date: classDate,
    time: classTime,
    createdAt: serverTimestamp()
  };

  try {
    // 🔥 Save to Firestore
    await addDoc(collection(db, "demoRequests"), data);
    
    // 📱 WhatsApp Setup
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

    const waAppUrl = `whatsapp://send?phone=${yourPhone}&text=${encodedMsg}`;
    const waWebUrl = `https://web.whatsapp.com/send?phone=${yourPhone}&text=${encodedMsg}`;

    if (isMobile) {
      window.location.href = `https://wa.me/${yourPhone}?text=${encodedMsg}`;
    } else {
      // Attempt to open the App Protocol
      window.location.assign(waAppUrl);
      // Fallback to Web after a delay if the protocol failed/was slow
      setTimeout(() => {
        window.open(waWebUrl, "_blank");
      }, 1500);
    }

    alert("✅ Demo request submitted!");

    // 🔄 Reset & close
    document.querySelectorAll("#formPopup input").forEach(i => i.value = "");
    closeForm();

  } catch (error) {
    console.error("Firestore Error:", error);
    alert("❌ Failed to submit request. Please check your internet and try again.");
  }
};
