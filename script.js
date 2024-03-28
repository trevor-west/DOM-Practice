const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.cssText = "color: red";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.cssText = "color: blue";
container.appendChild(h3);

const pinkDiv = document.createElement("div");
pinkDiv.style.cssText = "background-color: pink; border: 3px solid black";
container.appendChild(pinkDiv);

const hOne = document.createElement("h1");
hOne.textContent = "I'm in a div";
const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO!";
pinkDiv.appendChild(hOne);
pinkDiv.appendChild(paraTwo);