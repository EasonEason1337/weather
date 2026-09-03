// Named imports — must match the export name exactly, use curly braces
import { formatTemperature, formatWind, NZ_CITIES } from "./utils.js";

// Default import — you choose the name, no curly braces
import formatCityTitle from "./utils.js";

// Day 1 exercise
import { add, multiply, square } from "./math.js";

console.log(formatTemperature(13.5)); // 13.5°C
console.log(formatWind(34.2, 311)); // 34.2 km/h · 311°
console.log(NZ_CITIES[0].name); // Auckland
console.log(formatCityTitle(NZ_CITIES[0])); // Auckland (NZ)

console.log(add(10, 5));
console.log(multiply(10, 5));
console.log(square(6));
