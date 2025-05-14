function goToDashboard() {
  document.querySelector('.login-box').style.display = "block";
  document.getElementById("admin_dashboard").style.display = "none";
  document.getElementById("worker_dashboard").style.display = "none";
}

function addWorker() {
  alert("Pekerja baru ditambah.");
  // Simpan pekerja ke dalam sistem (database)
}

// Add other functions like registerData(), updateData(), sendReminder() etc.
function registerData() {
  alert("Data pendaftaran telah disimpan.");
  // Simpan data pendaftaran ke dalam sistem (database)
}
