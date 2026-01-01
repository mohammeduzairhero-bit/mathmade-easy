function openForm() {
  document.getElementById("formPopup").style.display = "block";
}

function sendRequest() {
  const data = {
    name: document.getElementById("studentName").value,
    cls: document.getElementById("studentClass").value,
    email: document.getElementById("parentEmail").value,
    phone: document.getElementById("parentPhone").value,
    country: document.getElementById("country").value,
    timezone: document.getElementById("timezone").value,
    date: document.getElementById("classDate").value,
    time: document.getElementById("classTime").value
  };

  for (let key in data) {
    if (!data[key]) {
      alert("Please fill all details");
      return;
    }
  }

  const formURL = "https://docs.google.com/spreadsheets/d/1VUE9mRu04_plgV6QY9AJCVIWspwsC8V-4MclIN2g_aE/edit?usp=sharing";

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

  const yourPhone = "918892193291";
  const message =
    `Math Made Easy Demo Class\n\n` +
    `Student: ${data.name}\nClass: ${data.cls}\nPhone: ${data.phone}`;

  window.location.href = `https://wa.me/${yourPhone}?text=${encodeURIComponent(message)}`;
}












