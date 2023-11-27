const shtypeNxansin = () => {
  const emri = document.getElementById("emri").value;
  const mbiemri = document.getElementById("mbiemri").value;
  const piket = document.getElementById("pik").value;
  let nota = "";

  const pik = parseInt(piket);

  console.log(emri, mbiemri, typeof piket);

  if (emri === "") {
    alert("JU LUTEM SHKRUANI EMRIN");
    return;
  }

  if (mbiemri === "") {
    alert("JU LUTEM SHKRUANI MBIEMRI");
    return;
  }

  if (pik < 0 || pik > 100) {
    alert("Invalid number input please input a number in between 0-100");
    return;
  }

  if (pik > 50 && pik < 61) {
    nota = 2;
  } else if (pik > 60 && pik < 71) {
    nota = 3;
  } else if (pik > 70 && pik < 81) {
    nota = 4;
  } else if (pik > 80 && pik < 101) {
    nota = 5;
  } else {
    nota = 1;
  }

  const para = document.createElement("p");
  para.innerText = `Emri: ${emri} Mbiemri: ${mbiemri} Piket: ${pik} Nota: ${nota}`;

  document.getElementById("nxansat").appendChild(para);
};
