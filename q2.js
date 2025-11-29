const tbody = document.getElementById("empBody");
const errorBox = document.getElementById("error");

function loadEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3002/employees");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        renderEmployees(data);
      } else {
        errorBox.textContent = "Failed to load employees";
      }
    }
  };
  xhr.send();
}

function renderEmployees(list) {
  tbody.innerHTML = "";
  list.forEach(emp => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdStatus = document.createElement("td");
    const tdToggle = document.createElement("td");
    const btn = document.createElement("button");
    tdName.textContent = emp.name;
    tdStatus.textContent = emp.status;
    btn.textContent = emp.status === "active" ? "Deactivate" : "Activate";
    btn.addEventListener("click", () => toggleStatus(emp, tdStatus, btn));
    tdToggle.appendChild(btn);
    tr.appendChild(tdName);
    tr.appendChild(tdStatus);
    tr.appendChild(tdToggle);
    tbody.appendChild(tr);
  });
}

function toggleStatus(emp, statusCell, button) {
  errorBox.textContent = "";
  const oldStatus = emp.status;
  const newStatus = oldStatus === "active" ? "inactive" : "active";
  emp.status = newStatus;
  statusCell.textContent = newStatus;
  button.textContent = newStatus === "active" ? "Deactivate" : "Activate";
  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", "http://localhost:3002/employees/" + emp.id);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && !(xhr.status >= 200 && xhr.status < 300)) {
      emp.status = oldStatus;
      statusCell.textContent = oldStatus;
      button.textContent = oldStatus === "active" ? "Deactivate" : "Activate";
      errorBox.textContent = "Failed to update status";
    }
  };
  xhr.send(JSON.stringify({ status: newStatus }));
}
loadEmployees();