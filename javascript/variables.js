const bruh = "bruh"; // use const by defualt
let admin;
console.log(bruh); // John

let planet = "Earth";
let visitor;

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

// Practice
// 10 const declarations of different types
const name = "Eason";
const age = 21;
const inty = 10n;
const bool = true;
const nullValue = null;

console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof inty); // "bigint"
console.log(typeof bool); // "boolean"
console.log(typeof nullValue); // "object"
