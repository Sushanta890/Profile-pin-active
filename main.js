document.getElementById("pinForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const acc = document.getElementById("accountInput").value;
  const pin1 = document.getElementById("pin1").value;
  const pin2 = document.getElementById("pin2").value;
  
  if (pin1 !== pin2 || pin1.length !== 4 || isNaN(pin1)) {
    alert("PINs must match and be 4-digit numbers.");
    return;
  }
  
  const manager = JSON.parse(localStorage.getItem("managerAccount"));
  if (!manager || manager.accountNo !== acc) {
    alert("Invalid Account Number.");
    return;
  }
  
  manager.pin = pin1;
  localStorage.setItem("managerAccount", JSON.stringify(manager));
  document.getElementById("pinMsg").textContent = "PIN set successfully! Redirecting...";
  setTimeout(() => {
    window.location.href = "manager-profile.html";
  }, 2000);
});