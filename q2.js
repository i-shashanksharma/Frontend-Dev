const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX_CHARS = 100;

function updateCounter() {
  let text = messageBox.value;
  if (text.length > MAX_CHARS) {
    text = text.slice(0, MAX_CHARS);
    messageBox.value = text;
  }

  const remaining = MAX_CHARS - text.length;
  counter.textContent = `${remaining} characters left`;
  counter.classList.remove("normal", "warn", "danger");

  if (remaining > 20) {
    counter.classList.add("normal");
  } else if (remaining > 0) {
    counter.classList.add("warn");
  } else {
    counter.classList.add("danger");
  }
}

messageBox.addEventListener("keydown", (event) => {
  const text = messageBox.value;
  const allowedKeys = [
    "Backspace", "Delete", "ArrowLeft", "ArrowRight",
    "ArrowUp", "ArrowDown", "Tab", "Home", "End"
  ];

  if (text.length >= MAX_CHARS && !allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
});
messageBox.addEventListener("input", updateCounter);

resetBtn.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
});
updateCounter();