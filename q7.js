const trackBox = document.getElementById("trackBox");
const coords = document.getElementById("coords");

trackBox.addEventListener("mousemove", (event) => {
  coords.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackBox.addEventListener("mouseleave", () => {
  coords.textContent = "Move mouse inside the box...";
});

trackBox.addEventListener("dblclick", (event) => {
  const rect = trackBox.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  trackBox.appendChild(dot);
});
