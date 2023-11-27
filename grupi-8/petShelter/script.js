const pets = [
  {
    id: "asjdlkf7982134zio",
    name: "Meowsalot",
    photo:
      "https://learnwebcode.github.io/pet-adoption-data/photos/meowsalot.webp",
    species: "cat",
    birthYear: "2019",
    description:
      "Meowsalot is a talkative friend that loves to play and is great with children. He is looking for a forever home today!",
  },
  {
    id: "bnvmzxcv11111111a",
    name: "Barksalot",
    photo:
      "https://learnwebcode.github.io/pet-adoption-data/photos/golden.webp",
    species: "dog",
    birthYear: "2022",
    description:
      "Barksalot is a sweetheart that loves to play and is great with children. Fetch, hide and seek, tik-tac-toe, tog of war, hop scotch, you name the game; he wants to play! Barksalot has been at our location for the last two months and he is looking for a forever home today!",
  },
  {
    id: "buoibrtz456789012",
    name: "Hopsalot",
    photo:
      "https://learnwebcode.github.io/pet-adoption-data/photos/hopsalot.webp",
    species: "rabbit",
    birthYear: "2023",
    description:
      "This is the fastest and highest jumping rabbit we have ever seen. Come visit her today!",
  },
  {
    id: "asdfasdfasdf29101",
    name: "Ruff",
    photo: "https://learnwebcode.github.io/pet-adoption-data/photos/dog3.webp",
    species: "dog",
    birthYear: "2017",
    description:
      "Ruff was a bit scared when we first found her, but she is an absolute sweetheart now. Your family will love her!",
  },
  {
    id: "vbcbxvcbxcvb89080",
    name: "Purrsloud",
    photo:
      "https://learnwebcode.github.io/pet-adoption-data/photos/purrsloud.webp",
    species: "cat",
    birthYear: "2015",
    description:
      "This sweetheart has the loudest purr and the softest fur we have ever come across! Adopt him today!",
  },
  {
    id: "zxczcxzcxzcxzcx61",
    name: "Thump",
    photo:
      "https://learnwebcode.github.io/pet-adoption-data/photos/bunny2.webp",
    species: "rabbit",
    birthYear: "2019",
    description:
      "If thump gets upset he kicks his back feet pretty hard. It's pretty endearing. Come see for yourself today.",
  },
  {
    id: "rertyetyeryte8765",
    name: "Breadmaker",
    photo:
      "https://learnwebcode.github.io/pet-adoption-data/photos/breadmaker.webp",
    species: "cat",
    birthYear: "2016",
    description:
      "Making biscuits, making bread; whatever you call it; this cat does it a lot. Come adopt her today!",
  },
  {
    id: "vnbbnvnbv98765432",
    name: "Luna",
    photo: "https://learnwebcode.github.io/pet-adoption-data/photos/dog2.webp",
    species: "dog",
    birthYear: "2014",
    description:
      "Luna is a joker and makes everyone she meets crack up. She is looking for a forever home!",
  },
  {
    id: "jkllkjlk123456789",
    name: "Sleepy",
    photo:
      "https://learnwebcode.github.io/pet-adoption-data/photos/bunny3.webp",
    species: "rabbit",
    birthYear: "2020",
    description:
      "Sleepy loves naps and cuddles. But he is also known to run laps and jump around. Visit him today!",
  },
];

let kafshet = pets;

function renderPets() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  for (let i = 0; i < kafshet.length; i++) {
    console.log(kafshet);
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let span = document.createElement("span");
    let p = document.createElement("p");
    let button = document.createElement("button");
    let divRightSide = document.createElement("div");

    img.src = kafshet[i].photo;
    img.width = 200;
    img.height = 200;
    h2.innerText = kafshet[i].name;
    span.innerText = `${2023 - kafshet[i].birthYear} age - ${
      kafshet[i].species
    }`;
    p.innerText = kafshet[i].description;
    button.innerText = `Adopt ${kafshet[i].name}`;

    button.style.width = "140px";
    button.style.padding = "10px";
    button.style.backgroundColor = "purple";
    button.style.color = "white";
    button.style.borderRadius = "7px";

    div.appendChild(img);
    divRightSide.appendChild(h2);
    divRightSide.appendChild(span);
    divRightSide.appendChild(p);
    divRightSide.appendChild(button);
    div.appendChild(divRightSide);

    div.style.display = "flex";
    divRightSide.style.display = "flex";
    divRightSide.style.flexDirection = "column";
    divRightSide.style.gap = "20px";
    divRightSide.style.paddingLeft = "15px";

    div.style.borderRadius = "20px";
    div.style.overflow = "hidden";
    div.style.width = "40%";
    div.style.margin = "0 auto";
    div.style.backgroundColor = "white";

    content.appendChild(div);
  }
}

renderPets();

function onAllAnimalsHandler(value) {
  kafshet = pets;
  renderPets();
}
function onCatHandler(value) {
  kafshet = pets.filter((pet) => pet.species === value);
  renderPets();
}
function onDogHandler(value) {
  kafshet = pets.filter((pet) => pet.species === value);
  renderPets();
}
function onRabbitHandler(value) {
  kafshet = pets.filter((pet) => pet.species === value);
  renderPets();
}
