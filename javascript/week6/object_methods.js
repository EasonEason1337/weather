const regionStats = {
  Auckland: 1_700_000,
  Wellington: 215_000,
  Canterbury: 510_000,
  Otago: 230_000,
  Waikato: 490_000,
};

// Object.keys() — array of just the keys
const names = Object.keys(regionStats);
console.log(names);
// ['Auckland', 'Wellington', 'Canterbury', 'Otago', 'Waikato']

// Object.values() — array of just the values
const populations = Object.values(regionStats);
console.log(populations);
// [1700000, 215000, 510000, 230000, 490000]

// Object.entries() — array of [key, value] pairs
const entries = Object.entries(regionStats);
console.log(entries);
// [['Auckland', 1700000], ['Wellington', 215000], ...]

// The real power — now you can map/filter/reduce over an object
const totalPopulation = Object.values(regionStats).reduce(
  (sum, pop) => sum + pop,
  0,
);
console.log(totalPopulation.toLocaleString()); // 3,145,000

// Find all regions with population over 400,000
const large = Object.entries(regionStats)
  .filter(([name, pop]) => pop > 400_000)
  .map(([name, pop]) => name);
console.log(large); // ['Auckland', 'Canterbury', 'Waikato']

// Note: [name, pop] is array destructuring inside the function parameter
// entries gives you ['Auckland', 1700000]
// [name, pop] unpacks that into two variables

// Convert back to an object with Object.fromEntries()
const densityData = {
  Auckland: 344,
  Wellington: 27,
  Canterbury: 11,
};

const highDensity = Object.fromEntries(
  Object.entries(densityData).filter(([name, density]) => density > 50),
);
console.log(highDensity); // { Auckland: 344, Wellington: 27 }

const weatherResults = {
  Auckland: { temp: 13.0, wind: 14.3, condition: "cloudy" },
  Wellington: { temp: 11.5, wind: 34.2, condition: "windy" },
  Christchurch: { temp: 12.5, wind: 13.0, condition: "clear" },
  Dunedin: { temp: 9.3, wind: 9.7, condition: "clear" },
  Hamilton: { temp: 12.2, wind: 12.1, condition: "rainy" },
};

// 1. Use Object.keys() to get an array of city names
const namez = Object.keys(weatherResults);
console.log(namez);
// 2. Use Object.values() and reduce() to find the average temperature
//    across all cities — round to 1 decimal place
const temp =
  Object.values(weatherResults)
    .map((city) => city.temp)
    .reduce((total, cur) => {
      return total + cur;
    }, 0) / Object.values(weatherResults).length;
console.log(temp);
// 3. Use Object.entries() and filter() to get only cities
//    where wind speed is above 20 km/h
const windy = Object.entries(weatherResults)
  .filter(([name, obj]) => {
    return obj.wind > 20;
  })
  .map(([name]) => name);
console.log(windy);
// 4. Use Object.entries() and map() to convert the object into
//    an array of strings like "Auckland: 13°C"
const deg = Object.entries(weatherResults).map(([name, obj]) => {
  return `${name}: ${obj.temp}°C`;
});
console.log(deg);
