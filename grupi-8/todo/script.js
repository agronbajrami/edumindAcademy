function OnInsertHandler() {
  const todoTask = document.getElementById("todo").value;

  if (todoTask === "") {
    alert("Ju lutem shkruani ne input");
    return;
  }

  let li = document.createElement("li");
  let completed = document.createElement("button");
  let deleted = document.createElement("button");

  completed.innerText = "Completed";
  deleted.innerText = "Deleted";

  completed.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  deleted.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = todoTask;

  li.appendChild(completed);
  li.appendChild(deleted);

  let ul = document.getElementById("lista");
  ul.appendChild(li);

  document.getElementById("todo").value = "";
}
