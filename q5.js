const daySelect = document.getElementById("daySelect");
const classesDiv = document.getElementById("classes");

function loadTimetable() {
  const day = daySelect.value;
  fetch("http://localhost:3005/timetable?day=" + encodeURIComponent(day))
    .then(r => r.json())
    .then(data => renderClasses(data))
    .catch(() => {
      classesDiv.textContent = "Error loading timetable";
    });
}

function renderClasses(list) {
  classesDiv.innerHTML = "";
  if (!list.length) {
    classesDiv.textContent = "No classes today.";
    return;
  }
  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "class-item";
    div.textContent = item.subject + " | " + item.faculty + " | " + item.time;
    classesDiv.appendChild(div);
  });
}

daySelect.addEventListener("change", loadTimetable);
loadTimetable();
