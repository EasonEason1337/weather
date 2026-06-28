// Hardcoded mini GeoJSON — same structure as the real thing
const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Auckland", island: "North", population: 1700000 },
      geometry: { type: "Polygon", coordinates: [[]] },
    },
    {
      type: "Feature",
      properties: { name: "Wellington", island: "North", population: 215000 },
      geometry: { type: "Polygon", coordinates: [[]] },
    },
    {
      type: "Feature",
      properties: { name: "Canterbury", island: "South", population: 510000 },
      geometry: { type: "Polygon", coordinates: [[]] },
    },
    {
      type: "Feature",
      properties: { name: "Otago", island: "South", population: 230000 },
      geometry: { type: "Polygon", coordinates: [[]] },
    },
    {
      type: "Feature",
      properties: { name: "Waikato", island: "North", population: 490000 },
      geometry: { type: "Polygon", coordinates: [[]] },
    },
    {
      type: "Feature",
      properties: {
        name: "Bay of Plenty",
        island: "North",
        population: 345000,
      },
      geometry: { type: "Polygon", coordinates: [[]] },
    },
    {
      type: "Feature",
      properties: { name: "Southland", island: "South", population: 102000 },
      geometry: { type: "Polygon", coordinates: [[]] },
    },
  ],
};

// YOUR TASKS:
// 1. Log how many features (regions) are in the collection
//    Hint: data.features.length
console.log(data.features.length);

// 2. Use map() to get an array of just the region names
//    Hint: look at what's inside feature.properties in the browser
const regionsNames = data.features.map((property) => property.properties);
console.log(regionsNames);
// 3. Filter for North Island only
const allFeatures = data.features.filter(
  (feature) => feature.properties.island == "North"
);
console.log(allFeatures.map((names) => names.properties.name));

// 4. Geometry type of the first feature
console.log(data.features[0].geometry.type);

// BONUS — combine everything from this week:
// Use reduce to get total population of South Island regions only

const southIsland = data.features.reduce((total, feature) => {
  if (feature.properties.island == "South") {
    return total + feature.properties.population;
  }
  return total;
}, 0);
console.log(southIsland);

const southPopulation = data.features
  .filter((f) => f.properties.island === "South")
  .reduce((total, f) => total + f.properties.population, 0);

console.log("South Island total population:", southPopulation);
