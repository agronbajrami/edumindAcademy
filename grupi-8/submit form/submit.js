function submitData() {
  const emri = document.getElementById("emri").value;
  const mbiemri = document.getElementById("mbiemri").value;
  const email = document.getElementById("email").value;
  const mosha = document.getElementById("mosha").value;

  if (emri.length < 3 || emri.length > 12) {
    document.getElementById("outPutEmri").innerHTML = "KY EMER ESHTE JO VALID";
  }

  if (
    mbiemri.length < 3 ||
    (mbiemri.length > 12 && mbiemri[mbiemri.length - 1] !== "a") ||
    mbiemri[mbiemri.length - 1] !== "i"
  ) {
    document.getElementById("outputMbiemri").innerHTML =
      "KY mbiemer ESHTE JO VALID";
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("outputEmail").innerHTML =
      "EMAILI NUK ESHTE NE RREGULl";
  }

  if (parseInt(mosha) < 0 || parseInt(mosha) > 125) {
    document.getElementById("outPutMosha").innerHTML =
      "OSE SKA LIND ALA OSE KA VDEK";
  }
}
