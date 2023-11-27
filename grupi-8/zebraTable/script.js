function onInsertHandler() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let age = document.getElementById("age").value;

  let tr = document.createElement("tr");
  let nameTd = document.createElement("td");
  let surnameTd = document.createElement("td");
  let ageTd = document.createElement("td");
  let completeTd = document.createElement("td");
  let deleteTd = document.createElement("td");

  nameTd.innerText = name;
  surnameTd.innerText = surname;
  ageTd.innerText = age;

  let completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.onclick = function () {
    tr.style.textDecoration =
      tr.style.textDecoration === "line-through" ? "none" : "line-through";
  };
  completeTd.appendChild(completeButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
    tr.remove();
  };
  deleteTd.appendChild(deleteButton);

  tr.appendChild(nameTd);
  tr.appendChild(surnameTd);
  tr.appendChild(ageTd);
  tr.appendChild(completeTd);
  tr.appendChild(deleteTd);

  if (counter % 2 === 0) {
    tr.style.backgroundColor = "grey";
  }

  let tbody = document.getElementById("tbody");
  tbody.appendChild(tr);
  ++counter;
}
