let color = "red";

function whatColor() {
  let color = "green";
  console.log(color); //1

  function chooseColor() {
    let color = "yellow";
    console.log(color); // 3
  }
}

whatColor();
console.log(color); //2
