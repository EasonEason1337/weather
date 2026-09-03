// The problem Set solves — removing duplicates from an array
const islandTags = ["North", "South", "North", "North", "South", "South"];

// Without Set — messy
const unique1 = islandTags.filter(
  (tag, index) => islandTags.indexOf(tag) == index,
);
console.log(unique1);
// With Set — clean
const unique2 = [...new Set(islandTags)];
console.log(unique2); // ['North', 'South']

// Set methods
const regionSet = new Set(["Auckland", "Wellington", "Otago"]);
regionSet.add("Canterbury"); // add an item
regionSet.has("Wellington"); // true — check existence (faster than array.includes)
regionSet.delete("Otago"); // remove an item
regionSet.size; // 3 — how many items

// Real GIS use case — get unique land use types from a dataset
const features = [
  { properties: { landUse: "urban", name: "CBD" } },
  { properties: { landUse: "rural", name: "Waikato" } },
  { properties: { landUse: "urban", name: "Newmarket" } },
  { properties: { landUse: "conservation", name: "Fiordland" } },
  { properties: { landUse: "rural", name: "Southland" } },
];

const uniqueLandUses = [...new Set(features.map((f) => f.properties.landUse))];
console.log(uniqueLandUses); // ['urban', 'rural', 'conservation']

// Map vs Object — Map preserves insertion order and allows any key type
const cityData = new Map();

// set(key, value) — add entries
cityData.set("Auckland", { population: 1_700_000, lat: -36.86 });
cityData.set("Wellington", { population: 215_000, lat: -41.28 });
cityData.set("Dunedin", { population: 130_000, lat: -45.88 });

// get(key) — retrieve
console.log(cityData.get("Auckland")); // { population: 1700000, lat: -36.86 }

// has(key) — check existence
console.log(cityData.has("Hamilton")); // false

// size — how many entries
console.log(cityData.size); // 3

// Looping over a Map
cityData.forEach((data, city) => {
  console.log(`${city}: ${data.population.toLocaleString()}`);
});

// Real use case — cache API results so you don't fetch the same city twice
const weatherCache = new Map();

async function getCachedWeather(cityName, lat, lon) {
  if (weatherCache.has(cityName)) {
    console.log(`${cityName} — using cached data`);
    return weatherCache.get(cityName);
  }

  const weather = await fetchWeather(lat, lon);
  weatherCache.set(cityName, weather);
  return weather;
}

const rawData = [
  { region: "Auckland", island: "North", type: "urban" },
  { region: "Hamilton", island: "North", type: "urban" },
  { region: "Wellington", island: "North", type: "urban" },
  { region: "Nelson", island: "South", type: "urban" },
  { region: "Fiordland", island: "South", type: "conservation" },
  { region: "Waikato", island: "North", type: "rural" },
  { region: "Southland", island: "South", type: "rural" },
];

// 1. Use Set to get all unique island values from rawData
const uni = [...new Set(rawData.map((item) => item.island))];
console.log(uni);
// 2. Use Set to get all unique land use types
const use = [...new Set(rawData.map((item) => item.type))];
console.log(use);
// 3. Create a Map where the key is region name
//    and the value is the full object
//    Then use .get() to retrieve Fiordland's data
const ok = new Map(rawData);
rawData.forEach((item) => {
  ok.set(item.region, item);
});
console.log(ok.get("Fiordland"));
// 4. CHALLENGE — group regions by island using a Map:
//    North → ['Auckland', 'Hamilton', 'Wellington', 'Waikato']
//    South → ['Nelson', 'Fiordland', 'Southland']

const islandMap = new Map();

rawData.forEach((item) => {
  if (!islandMap.has(item.island)) {
    islandMap.set(item.island, []);
  }

  islandMap.get(item.island).push(item.region);
});

console.log(islandMap);
