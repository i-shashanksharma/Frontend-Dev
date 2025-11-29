const list = $("#taskList");
const filter = $("#filter");

function loadTasks() {
  let url = "http://localhost:3003/tasks";
  const value = filter.val();
  if (value === "Low" || value === "Medium" || value === "High") {
    url += "?priority=" + value;
  } else if (value === "completed") {
    url += "?completed=true";
  }
  $.ajax({
    url,
    method: "GET",
    success: data => renderTasks(data),
    error: () => {
      list.empty();
      list.text("Error loading tasks");
    }
  });
}

function renderTasks(tasks) {
  list.empty();
  if (!tasks.length) {
    list.text("No tasks found");
    return;
  }
  tasks.forEach(task => {
    const div = $("<div>").addClass("task");
    const info = $("<span>").text(task.title + " (" + task.priority + ")");
    const checkbox = $("<input type='checkbox'>");
    checkbox.prop("checked", task.completed);
    checkbox.on("change", () => toggleCompleted(task, checkbox));
    div.append(info, checkbox);
    list.append(div);
  });
}

function toggleCompleted(task, checkbox) {
  const newVal = checkbox.is(":checked");
  $.ajax({
    url: "http://localhost:3003/tasks/" + task.id,
    method: "PATCH",
    contentType: "application/json",
    data: JSON.stringify({ completed: newVal }),
    error: () => {
      checkbox.prop("checked", !newVal);
    }
  });
}

filter.on("change", loadTasks);
loadTasks();
