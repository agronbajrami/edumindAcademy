function onOrderHandler() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;

  let cards = document.getElementById("cards");

  let card = document.createElement("div");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let status = document.createElement("p");
  let colour = document.createElement("p");
  let sizee = document.createElement("p");
  let accept = document.createElement("button");
  let decline = document.createElement("button");

  h2.innerText = title;
  img.src = image;
  img.style.width = "100px";
  status.innerText = "Status: Ordered";
  colour.innerText = "Color: " + color;
  sizee.innerText = "Size: " + size;
  accept.innerText = "Accept";
  decline.innerText = "Decline";

  card.style.width = "200px";
  card.style.height = "200px";
  card.style.border = "2px solid black";
  card.style.backgroundColor = color;

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(status);
  card.appendChild(sizee);
  card.appendChild(colour);
  card.appendChild(accept);
  card.appendChild(decline);

  cards.appendChild(card);
}
