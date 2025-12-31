function openForm() {
  document.getElementById("formPopup").style.display = "block";
}

function closeForm() {
  document.getElementById("formPopup").style.display = "none";
}

function sendRequest() {
  const name = document.getElementById("studentName").value.trim();
  const cls = document.getElementById("studentClass").value.trim();
  const parentEmail = document.getElementById("parentEmail").value.trim();
  const phone = document.getElementById("parentPhone").value.trim();
  const country = document.getElementById("country").value.trim();
  const timezone = document.getElementById("timezone").value.trim();
  const classDate = document.getElementById("classDate").value;
  const classTime = document.getElementById("classTime").value;

  if (
    !name || !cls || !parentEmail || !phone ||
    !country || !timezone || !classDate || !classTime
  ) {
    alert("Please fill all details");
    return;
  }

  const yourPhone = "918892193291"; // 🔁 your number

  const message =
    `*Math Made Easy*\n` +
    `Demo Class\n\n` +
    `Student Name: ${name}\n` +
    `Class: ${cls}\n` +
    `Parent Email: ${parentEmail}\n` +
    `Parent Phone: ${phone}\n` +
    `Country: ${country}\n` +
    `Time Zone: ${timezone}\n` +
    `Preferred Date: ${classDate}\n` +
    `Preferred Time: ${classTime} (${timezone})\n\n` +
    `Thank you for reaching us. We will answer shortly.`;

  const encodedMsg = encodeURIComponent(message);
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  // 📱 Mobile → Messages (SMS)
  if (isMobile) {
    window.location.href = `sms:${yourPhone}?body=${encodedMsg}`;
    const whatsappApp    = `whatsapp://send?phone=${yourPhone}&text=${encodedMsg}`;
    return;
  }

  // 💻 Laptop → WhatsApp app if installed, else WhatsApp Web
  const whatsappApp = `whatsapp://send?phone=${yourPhone}&text=${encodedMsg}`;
  const whatsappWeb = `https://web.whatsapp.com/send?phone=${yourPhone}&text=${encodedMsg}`;

  window.location.href = whatsappApp;
  setTimeout(() => {
    window.open(whatsappWeb, "_blank");
  }, 1200);
}
