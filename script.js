// 🔥 Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔁 PASTE YOUR CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyCkfMTu6MwqiGcKEhZLMD1hBA_KOtMJBQ8",
  authDomain: "mathmade-easy.firebaseapp.com",
  projectId: "mathmade-easy",
  storageBucket: "mathmade-easy.firebasestorage.app",
  messagingSenderId: "837096871206",
  appId: "1:837096871206:web:cfdd73794a50a7e25adde7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function openForm() {
  document.getElementById("formPopup").style.display = "block";
}

function sendRequest() {
  const data = {
    studentName: studentName.value,
    studentClass: studentClass.value,
    parentEmail: parentEmail.value,
    parentPhone: parentPhone.value,
    country: country.value,
    timezone: timezone.value,
    date: classDate.value,
    time: classTime.value,
    createdAt: new Date()
  };

  for (let k in data) {
    if (!data[k]) {
      alert("Fill all details");
      return;
    }
  }

  // 🔥 SAVE TO FIREBASE
  addDoc(collection(db, "demoRequests"), data)
    .then(() => {
      alert("Demo request saved successfully");
    })
    .catch(() => {
      alert("Error saving data");
    });

  // 📱 WhatsApp
  const yourPhone = "918892193291";
  const msg =
    `Math Made Easy Demo Class\n\n` +
    `Student: ${data.studentName}\n` +
    `Class: ${data.studentClass}\n` +
    `Phone: ${data.parentPhone}`;

  const isMobile = /Android|iPhone/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${yourPhone}&text=${encodeURIComponent(msg)}`;
  } else {
    window.location.href = `whatsapp://send?phone=${yourPhone}&text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(`https://web.whatsapp.com/send?phone=${yourPhone}&text=${encodeURIComponent(msg)}`, "_blank");
    }, 1200);
  }
}
