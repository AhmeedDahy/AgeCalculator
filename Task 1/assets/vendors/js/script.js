function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const dob = new Date(dobInput);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const monthDiff = now.getMonth() - dob.getMonth();
  console.log(dobInput);
  if (dobInput === "") {
    document.getElementById("result").innerHTML = "";
    showError("Please enter your date of birth!");
    return;
  }
  if (dob >= now) {
    document.getElementById("result").innerHTML = "";
    showError("Please enter a valid date of birth.");
    return;
  }
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
    age--;
  }
  document.getElementById("result").innerText = `Your age is: ${age} years.`;
  if (age === 0) {
    document.getElementById("result").innerText = `Your age is less than year.`;
  }
}

function showError(message) {
  let errorDiv = document.createElement("div");
  errorDiv.classList.add("error-message");
  errorDiv.innerText = message;
  document.getElementById("result").appendChild(errorDiv);
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const container = document.querySelector(".container");
  container.classList.toggle("dark-mode");
  const errorMessage = document.querySelector(".error-message");
  errorMessage.classList.toggle("dark-mode");
  const btn = document.querySelector(".btn");
  btn.classList.toggle("dark-mode");
  const input = document.getElementById("dob");
  input.classList.toggle("dark-mode");
}

document.querySelector(".btn").addEventListener("click", calculateAge);

document
  .querySelector(".dark-mode-btn")
  .addEventListener("click", toggleDarkMode);
