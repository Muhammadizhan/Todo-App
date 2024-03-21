let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = "";
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${task}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(listItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newTaskText = prompt("Edit task:", tasks[index]);
  if (newTaskText !== null) {
    tasks[index] = newTaskText.trim();
    renderTasks();
  }
}

renderTasks();
