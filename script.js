// ================= FIREBASE =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ================= CONFIG =================
const firebaseConfig = {
  apiKey: "AIzaSyCkfMTu6MwqiGcKEhZLMD1hBA_KOtMJBQ8",
  authDomain: "mathmade-easy.firebaseapp.com",
  projectId: "mathmade-easy",
  storageBucket: "mathmade-easy.appspot.com",
  messagingSenderId: "837096871206",
  appId: "1:837096871206:web:cfdd73794a50a7e25adde7"
};

// ================= INIT =================
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ================= CURSOR LIGHT =================
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// ================= FORM LOGIC =================
let currentStep = 0;
let steps = [];

window.openForm = () => {
  document.getElementById("formPopup").style.display = "flex";
  steps = document.querySelectorAll(".form-step");
  currentStep = 0;
  showStep(currentStep);
};

window.closeForm = () => {
  document.getElementById("formPopup").style.display = "none";
};

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

window.nextStep = () => {
  if (!validateStep(currentStep)) return;
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
};

window.prevStep = () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
};

function validateStep(step) {
  const inputs = steps[step].querySelectorAll("input");
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("⚠️ Please fill all fields");
      input.focus();
      return false;
    }
  }
  return true;
}

// ================= SUBMIT =================
window.sendRequest = async () => {
  const data = {
    studentName: studentName.value.trim(),
    studentClass: studentClass.value.trim(),
    parentEmail: parentEmail.value.trim(),
    parentPhone: parentPhone.value.trim(),
    country: country.value.trim(),
    timezone: timezone.value.trim(),
    date: classDate.value,
    time: classTime.value,
    createdAt: serverTimestamp()
  };

  for (let key in data) {
    if (!data[key]) {
      alert("⚠️ Please fill all details");
      return;
    }
  }

  try {
    await addDoc(collection(db, "demoRequests"), data);

    const msg = encodeURIComponent(
      `📘 Math Made Easy – Demo Request\n\n` +
      `👦 Student: ${data.studentName}\n` +
      `🏫 Class: ${data.studentClass}\n` +
      `📧 Email: ${data.parentEmail}\n` +
      `📞 Phone: ${data.parentPhone}\n` +
      `🌍 Country: ${data.country}\n` +
      `🕒 Preferred Time: ${data.time}`
    );

    window.open(`https://wa.me/918892193291?text=${msg}`, "_blank");

    document.querySelectorAll("#formPopup input").forEach(i => i.value = "");
    closeForm();

  } catch (err) {
    console.error(err);
    alert("❌ Failed to submit request");
  }
};

// =================================================
// 🔥 SCROLL ANIMATIONS (SECTIONS + CARDS)
// =================================================

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- SECTION REVEAL ---------- */
  const sections = document.querySelectorAll(".section");
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach(sec => sectionObserver.observe(sec));

  /* ---------- CARD REVEAL ---------- */
  const cards = document.querySelectorAll(".card");
  const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );
  cards.forEach(card => cardObserver.observe(card));

  /* ---------- SCRAMBLE TEXT ---------- */
  const scrambleEls = document.querySelectorAll(".scramble");

  scrambleEls.forEach(el => {
    const text = el.textContent;
    el.textContent = "";

    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.setProperty("--rx", Math.random());
      span.style.setProperty("--ry", Math.random());
      span.style.setProperty("--rr", Math.random());
      span.style.transitionDelay = `${i * 0.04}s`;
      el.appendChild(span);
    });
  });

  const scrambleObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          scrambleObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  scrambleEls.forEach(el => scrambleObserver.observe(el));
});

// ===============================
// FLOATING MATH SYMBOL BACKGROUND
// ===============================
const mathSymbols = [
  "➕", "➖", "✖", "➗",
  "π", "√", "∑", "∞",
  "θ", "≈", "≠", "≤", "≥",
  "📐", "📏"
];

const colors = ["blue", "yellow", "orange", "deep"];
const bg = document.querySelector(".math-bg");

function createMathShape() {
  const span = document.createElement("span");
  span.className = "math-shape " + colors[Math.floor(Math.random() * colors.length)];
  span.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 15 + Math.random() * 25 + "s";
  span.style.animationDelay = Math.random() * 5 + "s";

  bg.appendChild(span);

  // cleanup
  setTimeout(() => {
    span.remove();
  }, 40000);
}

// initial load
for (let i = 0; i < 25; i++) {
  createMathShape();
}

// keep spawning
setInterval(createMathShape, 1200);
