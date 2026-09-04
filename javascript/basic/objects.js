const region = {
  name: "Wellington",
  island: "North",
  population: 215_000,
  isCapital: true,
};

// Reading values — two ways
console.log(region.name);
console.log(region["name"]);

// Adding a new key
region.area_km2 = 8048;
console.log(region);

// Updating existing key
region.population = 220_000;
console.log(region);

// Deleting a key
delete region.isCapital;
console.log(region);

// Destructuring — unpack keys into variables
//const { name, population } = region;
//console.log(name);
//console.log(population);

// Rename while destructuring
const { name: regionName } = region;
console.log(regionName); // 'Wellington'

// Default value if key doesn't exist
const { timezone = "Pacific/Auckland" } = region;
console.log(timezone); // 'Pacific/Auckland' — wasn't in the object

// Spread — copy an object and override some keys
const updatedRegion = { ...region, population: 225_000 };
console.log(updatedRegion.population); // 225_000 — original unchanged
console.log(region.population); // 220_000 — still the old value

const feature = {
  type: "Feature",
  properties: {
    name: "Otago",
    population: 230_000,
    area_km2: 31_492,
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        /* imagine coordinates here */
      ],
    ],
  },
};

// This is a real GeoJSON feature object structure

// 1. Destructure name and population out of feature.properties
const { name, population } = feature.properties;
console.log(name); // 'Otago'
console.log(population); // 230_000
// 2. Log the geometry type using dot notation
console.log(feature.geometry.type); // 'Polygon'
// 3. Create a new object that spreads feature.properties and adds a new key:
//    density_per_km2 — calculate it from population and area_km2
const prop = {
  ...feature.properties,
  density_per_km2: feature.properties.population / feature.properties.area_km2,
};
console.log(prop);
// 4. What is feature.properties.missing ?? 'unknown' ?
//    (that's the nullish coalescing operator — try it) if the value on the left is null or undefined, it returns the value on the right
console.log(feature.properties.missing ?? "unknown");
