let counter = 0;

function addRow() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const surname = document.getElementById("surname").value;
  const city = document.getElementById("city").value;

  const rresht = document.createElement("tr");

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");

  td1.innerText = name;
  td2.innerText = surname;
  td3.innerText = age;
  td4.innerText = city;

  rresht.appendChild(td1);
  rresht.appendChild(td2);
  rresht.appendChild(td3);
  rresht.appendChild(td4);

  if (counter % 2 === 0) {
    rresht.style.backgroundColor = "white";
  } else {
    rresht.style.backgroundColor = "black";
    rresht.style.color = "white";
  }

  const tbody = document.getElementById("tbody");

  counter++; //1

  tbody.appendChild(rresht);
  tbody.appendChild(rresht);

  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";
}
