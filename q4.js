const themeButtons = document.querySelectorAll(".btn-container button");
const currentThemeLabel = document.getElementById("currentThemeLabel");

function setTheme(theme) {
  document.body.setAttribute("class", `theme-${theme}`);
  document.body.setAttribute("data-theme", theme);
  currentThemeLabel.textContent = `Current theme: ${theme}`;
}

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.getAttribute("data-theme-target");
    setTheme(theme);
  });
});
