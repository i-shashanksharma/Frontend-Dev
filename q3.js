const steps = document.querySelectorAll(".step");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const nameInput = document.getElementById("stepName");
const emailInput = document.getElementById("stepEmail");
const passwordInput = document.getElementById("stepPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const summaryDiv = document.getElementById("summary");
const summaryName = document.getElementById("summaryName");
const summaryEmail = document.getElementById("summaryEmail");
const summaryPassword = document.getElementById("summaryPassword");

let currentStepIndex = 0;

function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i === index));
  backBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.textContent = index === steps.length - 1 ? "Finish" : "Next";
}

function validateCurrentStep() {
  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  if (currentStepIndex === 0 && !nameInput.value.trim()) {
    nameError.textContent = "Name is required.";
    valid = false;
  } else if (currentStepIndex === 1) {
    const email = emailInput.value.trim();
    if (!email) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!email.includes("@")) {
      emailError.textContent = "Email must contain @.";
      valid = false;
    }
  } else if (currentStepIndex === 2 && passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  return valid;
}

nextBtn.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStepIndex < steps.length - 1) {
    currentStepIndex++;
    showStep(currentStepIndex);
  } else {
    summaryName.textContent = nameInput.value.trim();
    summaryEmail.textContent = emailInput.value.trim();
    summaryPassword.textContent = passwordInput.value;
    document.getElementById("multiStepForm").style.display = "none";
    summaryDiv.style.display = "block";
  }
});

backBtn.addEventListener("click", () => {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    showStep(currentStepIndex);
  }
});

showStep(currentStepIndex);