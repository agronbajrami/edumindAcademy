function onChangeHandler() {
  const value = document.getElementsByName("background");
  let selectedValue = "";

  for (let i = 0; i < value.length; i++) {
    if (value[i].checked) {
      selectedValue = value[i].value;
    }
  }

  console.log(selectedValue);
  let div = document.getElementById("background");
  let input = document.getElementById("text").value;
  if (selectedValue === "color") {
    div.style.backgroundColor = input;
  } else {
    div.style.backgroundImage = `url(${input})`;
  }
}
