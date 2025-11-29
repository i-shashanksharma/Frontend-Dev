const dropdown = document.getElementById("customDropdown");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});

dropdownMenu.addEventListener("click", (event) => {
  if (event.target.dataset.value) {
    dropdownToggle.textContent = event.target.dataset.value;
    dropdownMenu.classList.remove("open");
  }
});

document.addEventListener(
  "click",
  (event) => {
    if (!dropdown.contains(event.target)) dropdownMenu.classList.remove("open");
  },
  true
);
