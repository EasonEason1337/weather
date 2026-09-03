const region = {
  name: "Wellington",
  stats: {
    population: 215_000,
  },
};

// Without optional chaining — crashes if stats is missing
console.log(region.stats.population); // 215000 ✅
//console.log(region.climate.rainfall)         // ❌ TypeError: Cannot read properties of undefined

// With optional chaining — returns undefined instead of crashing
console.log(region.climate?.rainfall); // undefined ✅ no crash
console.log(region.stats?.population); // 215000 ✅
console.log(region.stats?.density?.per_km2); // undefined ✅ chains safely

// Works on arrays too
const regions = null;
console.log(regions?.[0]?.name); // undefined ✅ no crash

// Works on function calls
const getArea = null;
console.log(getArea?.()); // undefined ✅ no crash

// ?? returns the RIGHT side only when LEFT is null or undefined
const population = null;
console.log(population ?? "Unknown"); // 'Unknown'

const area = 0;
console.log(area ?? "Unknown"); // 0 — 0 is not null/undefined!

// Compare to || which treats 0, '', false as falsy
console.log(area || "Unknown"); // 'Unknown' — || is too aggressive

// In practice — safe property access with fallback
const feature = {
  properties: {
    name: "Otago",
    population: null,
  },
};

const pop = feature.properties?.population ?? "No data";
console.log(pop); // 'No data'

const name = feature.properties?.name ?? "Unknown region";
console.log(name); // 'Otago'

// Safely get a deeply nested value with a fallback
function getPopulationLabel(feature) {
  const pop = feature?.properties?.population;
  return pop != null ? pop.toLocaleString() : "Population unknown";
}

getPopulationLabel(null); // 'Population unknown'
getPopulationLabel({ properties: {} }); // 'Population unknown'
getPopulationLabel({ properties: { population: 0 } }); // '0'
getPopulationLabel({ properties: { population: 215_000 } }); // '215,000'

const weatherData = {
  cities: [
    { name: "Auckland", current: { temp: 13, wind: 14.3 } },
    { name: "Wellington", current: null },
    { name: "Dunedin", current: { temp: 9, wind: 22.1 } },
  ],
};

// 1. Safely access Wellington's temperature — should return undefined not crash
//    Hint: weatherData.cities[1].current?.temp
console.log(weatherData.cities[1].current?.temp);
// 2. Write a function getTemp(city) that:
//    - Takes a city object
//    - Returns the temperature formatted as "13°C"
//    - Returns "No data" if temperature is null or undefined
//    - Use ?. and ?? together
function getTemp(city){
    const temps = city.current?.temp
    return  temps != null ? temps.toLocaleString : "No data";
}
// 3. What's the difference between these two — predict before running:
console.log(0 ?? "fallback"); // a)0
console.log(0 || "fallback"); // b)fall
console.log(null ?? "fallback"); // c)fall
console.log("" ?? "fallback"); // d)""
