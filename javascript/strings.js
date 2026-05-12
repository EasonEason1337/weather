let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;

//backticks allow us to format an expression
function sum(a, b) {
  return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}`);

//backticks allow strings to span multiple lines

let guestlist = `Guests: 
 * John
 * Pete
 * Mary
`;
console.log(guestlist);

guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList); // a multiline list of guests, same as above

let str = `Hello`;

console.log(str[0]);
console.log(str.at(0));

console.log(str[str.length - 1]);
console.log(str.at(-1));

for (i = 0; i < str.length; i++) {
  console.log(str[i]);
}

console.log("Interface".toUpperCase());
console.log("Interface".toLowerCase());

console.log("Interface"[0].toLowerCase());

let str = "Widget with id";

console.log(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
console.log(str.indexOf("widget")); // -1, not found, the search is case-sensitive

console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)
console.log(str.indexOf("id", 2)); // 12
