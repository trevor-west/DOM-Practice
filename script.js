const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.cssText = "color: red";
container.appendChild(paragraph);