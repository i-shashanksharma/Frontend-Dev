const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

addProductBtn.addEventListener("click", () => {
  const productName = productInput.value.trim();
  if (!productName) return;
  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = productName;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(textSpan);
  li.appendChild(actionsDiv);

  productList.appendChild(li);
  productInput.value = "";
});

productList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("delete-btn")) {
    target.closest("li").remove();
  }

  if (target.classList.contains("edit-btn")) {
    const li = target.closest("li");
    enterEditMode(li);
  }
});

function enterEditMode(listItem) {
  if (listItem.querySelector("input")) return;

  const textSpan = listItem.querySelector("span");
  const input = document.createElement("input");
  input.type = "text";
  input.value = textSpan.textContent;
  input.className = "edit-input";

  listItem.replaceChild(input, textSpan);
  input.focus();

  input.addEventListener("blur", () => saveEdit(listItem, input));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      saveEdit(listItem, input);
      input.blur();
    }
  });
}

function saveEdit(listItem, inputElement) {
  const newSpan = document.createElement("span");
  newSpan.textContent = inputElement.value.trim() || "Untitled Product";
  listItem.replaceChild(newSpan, inputElement);
}
