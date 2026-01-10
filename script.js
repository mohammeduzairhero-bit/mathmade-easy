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

// 🎯 Mouse effect (safe)
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// ✅ OPEN FORM
window.openForm = () => {
  document.getElementById("formPopup").style.display = "block";
};

// ✅ CLOSE FORM
window.closeForm = () => {
  document.getElementById("formPopup").style.display = "none";
};
// 📱 Mobile number: only digits, max 10
const phoneInput = document.getElementById("parentPhone");
phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value
    .replace(/\D/g, "")     // remove non-digits
    .slice(0, 10);          // limit to 10 digits
});

// 🏫 Class: only numbers 1 to 10
const classInput = document.getElementById("studentClass");
classInput.addEventListener("input", () => {
  classInput.value = classInput.value.replace(/\D/g, "");
  if (classInput.value > 10) classInput.value = 10;
  if (classInput.value < 1 && classInput.value !== "") classInput.value = 1;
});

// ✅ SUBMIT FORM
window.sendRequest = async () => {
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

  // ✅ Validate ONLY user inputs
  const requiredFields = [
    "studentName",
    "studentClass",
    "parentEmail",
    "parentPhone",
    "country",
    "timezone",
    "date",
    "time"
  ];

  for (let field of requiredFields) {
    if (!data[field]) {
      alert("⚠️ Please fill all details");
      return;
    }
  }
  // 🚫 Phone number validation
if (data.parentPhone.length !== 10) {
  alert("📱 Mobile number must be exactly 10 digits");
  return;
}

// 🚫 Class validation
const classNum = Number(data.studentClass);
if (isNaN(classNum) || classNum < 1 || classNum > 10) {
  alert("🏫 Class must be between 1 and 10");
  return;
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

    const whatsappURL = isMobile
      ? `https://wa.me/${yourPhone}?text=${encodedMsg}`
      : `https://web.whatsapp.com/send?phone=${yourPhone}&text=${encodedMsg}`;

    window.open(whatsappURL, "_blank");

    // 🔄 Reset & close
    document.querySelectorAll("#formPopup input").forEach(i => i.value = "");
    closeForm();

  } catch (error) {
    console.error(error);
    alert("❌ Failed to submit request. Try again.");
  }
};
