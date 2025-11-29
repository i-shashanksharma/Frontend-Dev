const userForm = document.getElementById("userForm");

const nameField = document.getElementById("nameField");
const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("passwordField");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMsg = document.getElementById("successMsg");

function validateForm() {
  let valid = true;
  successMsg.textContent = "";

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  if (!nameField.value.trim()) {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  const email = emailField.value.trim();
  if (!email) {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!email.includes("@")) {
    emailError.textContent = "Email must contain @.";
    valid = false;
  }

  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  return valid;
}

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) successMsg.textContent = "Form Submitted Successfully!";
});

[nameField, emailField, passwordField].forEach((field) => {
  field.addEventListener("input", () => validateForm());
});
