const regions = ["Auckland", "Wellington", "Canterbury", "Otago", "Waikato"];
const populations = [1_700_000, 215_000, 510_000, 230_000, 490_000];
// This matches the regions array above: Auckland, Wellington, Canterbury, Otago, Waikato
// Accessing by index
console.log(regions[0]);
console.log(regions[2]);
// 1. Log the population of Wellington
console.log(populations[regions.indexOf("Wellington")]);
// 2. Add a new population (e.g. 190000 for Northland) to the end
regions.push("Northland");
populations.push(190_000);
console.log(regions);
console.log(populations);
// 3. Get just the first two populations using slice
console.log(populations.slice(0, 2));
// 4. What does populations.indexOf(999999) return? Why? because its out of the range
console.log(populations.indexOf(999999));

const regions1 = [
  { name: "Auckland", island: "North", population: 1_700_000 },
  { name: "Wellington", island: "North", population: 215_000 },
  { name: "Canterbury", island: "South", population: 510_000 },
  { name: "Otago", island: "South", population: 230_000 },
  { name: "Waikato", island: "North", population: 490_000 },
];

// filter() — returns a new array of items that pass the test
const northIsland = regions1.filter((region) => region.island == "North");
console.log(northIsland);

// map() — transforms every item, returns a new array of the same length
const names = regions1.map((region) => region.name);
console.log(names);

// map() can transform into any shape
const summarises = regions1.map(
  (region) => `${region.name} (${region.island} Island)`,
);
console.log(summarises);

// find() — returns the FIRST item that passes — or undefined if none matc
const otago = regions1.find((region) => region.name === "Otago");
console.log(otago);

const missing = regions1.find((region) => region.name === `Fiordland`);
console.log(missing);

// Using the regions array above:

// 1. Filter for South Island regions only
const southIsland = regions1.filter((region) => region.island === "South");
console.log(southIsland);

// 2. Map to get just the populations as an array of numbers
const populations1 = regions1.map((region) => region.population);
console.log(populations1);

// 3. Find the region with a population greater than 1,000,000
//    Hint: find(region => region.population > 1_000_000)
const pop = regions1.filter(region => region.population > 1_000_000)
console.log(pop);
// 4. Chain filter and map together in one line:
//    Get the names of all North Island regions
//    Hint: regions.filter(...).map(...)
const lit = regions1.filter(region => region.island == "North").map(region => region.name);
console.log(lit);
