function openForm() {
  document.getElementById("formPopup").style.display = "block";
}

function closeForm() {
  document.getElementById("formPopup").style.display = "none";
}

function sendRequest() {
  const data = {
    name: document.getElementById("studentName").value.trim(),
    cls: document.getElementById("studentClass").value.trim(),
    email: document.getElementById("parentEmail").value.trim(),
    phone: document.getElementById("parentPhone").value.trim(),
    country: document.getElementById("country").value.trim(),
    timezone: document.getElementById("timezone").value.trim(),
    date: document.getElementById("classDate").value,
    time: document.getElementById("classTime").value
  };

  for (let key in data) {
    if (!data[key]) {
      alert("Please fill all details");
      return;
    }
  }

  /* 🔗 GOOGLE FORM BACKEND URL (VERY IMPORTANT) */
  const formURL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  /* 📩 SEND TO GOOGLE FORM (SAVES TO SHEET) */
  const formData = new FormData();
  formData.append("entry.1505362577", data.name);
  formData.append("entry.94273218", data.cls);
  formData.append("entry.1455560592", data.email);
  formData.append("entry.1920149742", data.phone);
  formData.append("entry.1314795174", data.country);
  formData.append("entry.395610639", data.timezone);
  formData.append("entry.1978618620", data.date);
  formData.append("entry.1277771009", data.time);

  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });

  alert("Thank you! Your demo request has been submitted.");

  /* 📲 WHATSAPP LOGIC */
  const yourPhone = "918892193291";

  const message =
    `*Math Made Easy*\n` +
    `Demo Class\n\n` +
    `Student Name: ${data.name}\n` +
    `Class: ${data.cls}\n` +
    `Parent Email: ${data.email}\n` +
    `Parent Phone: ${data.phone}\n` +
    `Country: ${data.country}\n` +
    `Time Zone: ${data.timezone}\n` +
    `Preferred Date: ${data.date}\n` +
    `Preferred Time: ${data.time}\n\n` +
    `Thank you for reaching us. We will answer shortly.`;

  const encodedMsg = encodeURIComponent(message);
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  if (isMobile) {
    // 📱 Mobile WhatsApp
    window.location.href = `https://wa.me/${yourPhone}?text=${encodedMsg}`;
  } else {
    // 💻 Laptop: WhatsApp App → WhatsApp Web
    const whatsappApp = `whatsapp://send?phone=${yourPhone}&text=${encodedMsg}`;
    const whatsappWeb = `https://web.whatsapp.com/send?phone=${yourPhone}&text=${encodedMsg}`;

    window.location.href = whatsappApp;
    setTimeout(() => {
      window.open(whatsappWeb, "_blank");
    }, 1200);
  }
}
