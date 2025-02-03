let passedStudents = 0;
let failedStudents = 0;

const onSubmitHandler = () => {
  const name = document.getElementById("name").value;
  const math = document.getElementById("math").value;
  const physics = document.getElementById("physics").value;
  const algebra = document.getElementById("algebra").value;
  const english = document.getElementById("english").value;

  let rreshti = document.createElement("tr");
  let tdName = document.createElement("td");
  let tdMath = document.createElement("td");
  let tdPhysics = document.createElement("td");
  let tdAlgebra = document.createElement("td");
  let tdEnglish = document.createElement("td");
  let tdGeneralKnowledge = document.createElement("td");

  let mesatarja =
    (Number(math) + Number(physics) + Number(algebra) + Number(english)) / 4;

  tdName.innerText = name;
  tdMath.innerText = math;
  tdPhysics.innerText = physics;
  tdAlgebra.innerText = algebra;
  tdEnglish.innerText = english;
  tdGeneralKnowledge.innerText = mesatarja;

  rreshti.appendChild(tdName);
  rreshti.appendChild(tdMath);
  rreshti.appendChild(tdPhysics);
  rreshti.appendChild(tdAlgebra);
  rreshti.appendChild(tdEnglish);
  rreshti.appendChild(tdGeneralKnowledge);

  if (mesatarja > 49) {
    rreshti.style.backgroundColor = "green";
    passedStudents++;
  } else {
    rreshti.style.backgroundColor = "red";
    failedStudents--;
  }

  document.getElementById("passedStudents").innerHTML = passedStudents;
  document.getElementById("failedStudents").innerHTML = failedStudents;

  let tbody = document.getElementById("tbody");
  tbody.appendChild(rreshti);
};
