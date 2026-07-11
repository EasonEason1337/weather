// 1. Select the h1 by id, log its textContent
// 2. Select all .region-card elements, log how many there are
// 3. Select the FIRST .region-card, log its textContent
const title = document.getElementById("app-title");
const firstRegion = document.querySelector(".region-card"); //querySelector returns only the first matching element
const allRegion = document.querySelectorAll(".region-card"); //querySelectorAll returns all matching elements

console.log(allRegion.length);
console.log(title.textContent);
console.log(firstRegion.textContent);

const container = document.querySelector(".complete");
const para = document.createElement("div");
para.innerHTML = `<p class="risk-status">Unknown</p>`;
container.appendChild(para);

const status = document.querySelector(".risk-status");

status.textContent = "High Risk";
status.style.color = "red";
status.style.fontWeight = "bold";
status.style.fontSize = "100px";

const button = document.querySelector("#calculate-risk");
const eButton = document.querySelector("#Eason");
//events can be "click", "input" - text typed into field, "submit" - form submitted, "mouseover"-
//mouse hovers over element
button.addEventListener("click", function () {
  status.textContent = "Calculating...";
});

eButton.addEventListener("mouseover", function () {
  eButton.textContent = "HII";
});

const risk = document.querySelector(".risk-status2");
const input = document.querySelector("#region-search");
input.addEventListener("input", function (event) {
  risk.textContent = event.target.value;
});

// status.innerHTML = userInput be dangerous if userInput came
// from a form field, but status.textContent = userInput wouldn't be

const list = document.querySelector("#region-list");

const regionNames = ["Auckland", "Wellington", "Christchurch"];

regionNames.forEach((city) => {
  let temp = document.createElement("div");
  temp.textContent = city;
  temp.classList.add("region-card");
  list.appendChild(temp);
});
