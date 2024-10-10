const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    div.classList.toggle("completed");
  });
  const textNode = document.createTextNode(taskText);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });
  const div = document.createElement("div");
  div.className = "input-checkbox";
  div.appendChild(checkbox);
  div.appendChild(textNode);
  li.appendChild(div);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
