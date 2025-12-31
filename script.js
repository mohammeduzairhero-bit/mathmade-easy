function openForm() {
  document.getElementById("formPopup").style.display = "block";
}

function sendRequest() {
  const data = {
    studentName: document.getElementById("studentName").value.trim(),
    studentClass: document.getElementById("studentClass").value.trim(),
    parentEmail: document.getElementById("parentEmail").value.trim(),
    parentPhone: document.getElementById("parentPhone").value.trim(),
    country: document.getElementById("country").value.trim(),
    timezone: document.getElementById("timezone").value.trim(),
    classDate: document.getElementById("classDate").value,
   classTime: formatTimeAMPM(
  document.getElementById("classTime").value
)

  };

  for (let key in data) {
    if (!data[key]) {
      alert("Please fill all details");
      return;
    }
  }

  // 🔁 PASTE YOUR WEB APP URL BELOW
  const sheetURL = "https://script.google.com/macros/s/AKfycbxqm3OpU633j1y1O1oJ-5_B7qye3qv-25fBEUxAyUPLz8IlB5dUtA532V5sKaKnQMy3/exec";

  fetch(sheetURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });

  const yourPhone = "918892193291"; // your number

  const message =
    `*Math Made Easy*\n` +
    `Demo Class\n\n` +
    `Student Name: ${data.studentName}\n` +
    `Class: ${data.studentClass}\n` +
    `Parent Email: ${data.parentEmail}\n` +
    `Parent Phone: ${data.parentPhone}\n` +
    `Country: ${data.country}\n` +
    `Time Zone: ${data.timezone}\n` +
    `Preferred Date: ${data.classDate}\n` +
    `Preferred Time: ${data.classTime} (${data.timezone})\n\n` +
    `Thank you for reaching us. We will answer shortly.`;

  const encodedMsg = encodeURIComponent(message);
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  alert("Thank you! Your demo request has been submitted.");

  if (isMobile) {
    window.location.href = `sms:${yourPhone}?body=${encodedMsg}`;
    return;
  }

  const whatsappApp = `whatsapp://send?phone=${yourPhone}&text=${encodedMsg}`;
  const whatsappWeb = `https://web.whatsapp.com/send?phone=${yourPhone}&text=${encodedMsg}`;

  window.location.href = whatsappApp;
  setTimeout(() => {
    window.open(whatsappWeb, "_blank");
  }, 1200);
}
function formatTimeAMPM(time24) {
  let [hours, minutes] = time24.split(":");
  hours = parseInt(hours, 10);

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${ampm}`;
}






