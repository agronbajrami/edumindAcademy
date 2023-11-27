function onInsertHandler() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let index = document.getElementById("index").value;
  let subject = document.getElementById("subject").value;
  let points = document.getElementById("points").value;

  if (name == "") {
    alert("Please enter ur name");
    return;
  }
  if (surname == "") {
    alert("Please enter ur surname");
    return;
  }
  if (index == "") {
    alert("Please enter ur index");
    return;
  }
  if (subject == "") {
    alert("Please enter ur subject");
    return;
  }
  if (points == "") {
    alert("Please enter ur points");
    return;
  }

  let tr = document.createElement("tr");
  let tdname = document.createElement("td");
  let tdsurname = document.createElement("td");
  let tdindex = document.createElement("td");
  let tdsubject = document.createElement("td");
  let tdpoints = document.createElement("td");

  tdname.innerText = name;
  tdsurname.innerText = surname;
  tdindex.innerText = index;
  tdsubject.innerText = subject;
  tdpoints.innerText = points;

  if (parseInt(points) < 50) {
    tdpoints.style.backgroundColor = "red";
  } else {
    tdpoints.style.backgroundColor = "green";
  }

  tr.appendChild(tdname);
  tr.appendChild(tdsurname);
  tr.appendChild(tdindex);
  tr.appendChild(tdsubject);
  tr.appendChild(tdpoints);

  const tbody = document.getElementById("tbody");
  tbody.appendChild(tr);
}
