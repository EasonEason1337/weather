const regions = [
  { name: "Auckland", population: 1_700_000 },
  { name: "Wellington", population: 215_000 },
  { name: "Canterbury", population: 510_000 },
  { name: "Otago", population: 230_000 },
  { name: "Waikato", population: 490_000 },
];

// reduce(callback, startingValue)
// callback gets two arguments: accumulator (your pocket), currentItem
const total_population = regions.reduce((total, region) => {
  return total + region.population;
}, 0);

console.log(total_population); // 3,145,000

const populationMap = regions.reduce((obj, region) => {
  obj[region.name] = region.population;
  return obj;
}, {});

console.log(populationMap);

const regions1 = [
  { name: "Auckland", island: "North", area_km2: 4_941 },
  { name: "Wellington", island: "North", area_km2: 8_048 },
  { name: "Canterbury", island: "South", area_km2: 45_346 },
  { name: "Otago", island: "South", area_km2: 31_492 },
  { name: "Waikato", island: "North", area_km2: 25_598 },
];

// 1. Use reduce to find the total land area across all regions
const totalArea = regions1.reduce((total, region) => {
  return total + region.area_km2;
}, 0);
console.log(totalArea);
// 2. Use reduce to find the largest area (hint: compare accumulator to current)
//    Start with 0 in your pocket. If current area > pocket, replace it.

const largestArea = regions1.reduce((largest, region) => {
  if (region.area_km2 > largest) {
    return region.area_km2;
  }
  return largest;
}, 0);

console.log(largestArea);

// 3. CHALLENGE: use reduce to build an object that groups regions by island:
//    { North: ['Auckland', 'Wellington', 'Waikato'], South: ['Canterbury', 'Otago'] }
const groups = regions1.reduce((obj, region) => {
  if (!obj[region.island]) {
    obj[region.island] = [];
  }
  obj[region.island].push(region.name);
  return obj;
}, {});

console.log(groups);
