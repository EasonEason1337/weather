// JSON.stringify — turn a JS object into a text string (for sending over a network)
const region = { name: "Otago", population: 230_000 };
const jsonString = JSON.stringify(region);
console.log(region); // { name: 'Otago', population: 230000 }
console.log(jsonString); // '{"name":"Otago","population":230000}'
console.log(typeof jsonString); // 'string'

// JSON.parse — turn text back into a JS object (for receiving from a network)
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // 'Otago'
console.log(typeof parsed); // 'object'

// Pretty-print with indentation (useful for debugging)
console.log(JSON.stringify(region, null, 2));
// {
//   "name": "Otago",
//   "population": 230000
// }
