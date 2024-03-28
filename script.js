const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.cssText = "color: red";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.cssText = "color: blue";
container.appendChild(h3);