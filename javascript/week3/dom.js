const regions = [
  { name: "Auckland", island: "North", population: 1_700_000 },
  { name: "Wellington", island: "North", population: 215_000 },
  { name: "Canterbury", island: "South", population: 510_000 },
  { name: "Otago", island: "South", population: 230_000 },
  { name: "Waikato", island: "North", population: 490_000 },
];

// Step 1 — find the container in the HTML
const container = document.querySelector("#region-list");
// querySelector takes any CSS selector — #id, .class, or tag name
// It returns the first matching element, or null if not found

// Step 2 — create a card for each region and add it to the page
regions.forEach((region) => {
  // createElement makes a new element — it's not on the page yet
  const card = document.createElement("div");

  // className sets the CSS class
  card.className = `region-card ${region.island.toLowerCase()}`;

  // innerHTML sets the HTML content inside the element
  card.innerHTML = `
    <strong>${region.name}</strong>
    <p>${region.island} Island · Population: ${region.population}</p>
  `;

  if (region.population < 300000) {
    card.style.color = "black";
  }

  // appendChild puts it on the page, inside the container
  container.appendChild(card);
});
// 1. Add a heading above the list that shows the count:
//    "Showing 5 regions"
//    Hint: create an <h2> element, set its textContent, appendChild before the cards

const heading = document.createElement("h2");
heading.textContent = `Showing ${regions.length} regions`;
container.prepend(heading);
// container.before(element) Inserts before the container (same parent).
// container.after(element) Inserts after the container.
// container.appendChild(element) Inserts inside the container, at the end.

// 2. Add a total population line at the bottom:
//    "Total population: 3,145,000"
//    Use reduce() from Week 2 to calculate the total
//    Use .toLocaleString() to format the number with commas
const para = document.createElement("div");
para.innerHTML = `<p>Total Population: ${regions
  .reduce((total, region) => {
    return total + region.population;
  }, 0)
  .toLocaleString()}</p>`;
container.appendChild(para);

// 3. Make the population text red if the region has
//    fewer than 300,000 people
//    Hint: inside your forEach, check region.population
//    then set card.style.color = 'red' conditionally
const title = document.getElementById("app-title");

console.log(title.textContent);
