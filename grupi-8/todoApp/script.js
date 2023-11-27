let completedCount = 0;
let deletedCount = 0;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim() === "") return;

  const tasksList = document.getElementById("tasksList");
  const li = document.createElement("li");
  li.textContent = taskInput.value;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete");
  completeBtn.onclick = function () {
    completeTask(li);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.onclick = function () {
    deleteTask(li);
  };

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  tasksList.appendChild(li);

  taskInput.value = ""; // Clear input field after adding task
}

function completeTask(taskItem) {
  if (!taskItem.classList.contains("completed")) {
    taskItem.classList.add("completed");
    taskItem.style.color = "green"; // Set text color to green
    completedCount++;
    updateStats();
  }
}

function deleteTask(taskItem) {
  if (taskItem.classList.contains("completed")) {
    completedCount--;
  } else {
    deletedCount++;
  }
  taskItem.remove();
  updateStats();
}

function updateStats() {
  document.getElementById("completedCount").textContent = completedCount;
  document.getElementById("deletedCount").textContent = deletedCount;
}
