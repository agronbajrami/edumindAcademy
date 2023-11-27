let counter = 0;
let passedvariable = 0;
let failedvariable = 0;

function onInsertHandler() {
  const name = document.getElementById("name").value;
  const maths = document.getElementById("maths").value;
  const science = document.getElementById("science").value;
  const english = document.getElementById("english").value;
  const physics = document.getElementById("physics").value;

  const tr = document.createElement("tr");
  const tdname = document.createElement("td");
  const tdmaths = document.createElement("td");
  const tdscience = document.createElement("td");
  const tdenglish = document.createElement("td");
  const tdphysics = document.createElement("td");
  const tdgeneral = document.createElement("td");

  tdname.innerText = name;
  tdmaths.innerText = maths;
  tdscience.innerText = science;
  tdenglish.innerText = english;
  tdphysics.innerText = physics;
  tdgeneral.innerText =
    (parseInt(maths) +
      parseInt(science) +
      parseInt(english) +
      parseInt(physics)) /
    4;

  const passed = document.getElementById("passed");
  const failed = document.getElementById("failed");

  if (
    (parseInt(maths) +
      parseInt(science) +
      parseInt(english) +
      parseInt(physics)) /
      4 >
    50
  ) {
    ++passedvariable;
    passed.innerHTML = passedvariable;
  } else {
    ++failedvariable;
    failed.innerHTML = failedvariable;
  }

  tr.appendChild(tdname);
  tr.appendChild(tdmaths);
  tr.appendChild(tdscience);
  tr.appendChild(tdenglish);
  tr.appendChild(tdphysics);
  tr.appendChild(tdgeneral);

  if (counter % 2 === 0) {
    tr.style.backgroundColor = "yellow";
  } else {
    tr.style.backgroundColor = "hotpink";
  }

  const tbody = document.getElementById("tbody");
  tbody.appendChild(tr);

  ++counter;
}
