const form = document.getElementById("regForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", e => {
  e.preventDefault();
  message.textContent = "";
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  if (!name || !email) {
    message.textContent = "All fields are required.";
    return;
  }
  axios
    .get("http://localhost:3006/users", { params: { email } })
    .then(res => {
      if (res.data && res.data.length > 0) {
        message.textContent = "Email already registered.";
      } else {
        return axios.post("http://localhost:3006/users", { name, email });
      }
    })
    .then(res => {
      if (res && res.data) {
        message.textContent = "Registration successful.";
        nameInput.value = "";
        emailInput.value = "";
      }
    })
    .catch(() => {
      message.textContent = "Error during registration.";
    });
});
