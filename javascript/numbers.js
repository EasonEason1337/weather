let billion = 1_000_000_000; // Same as 1000000000
console.log(billion)
console.log(billion == 1e9)

//alert( 0xff ); // 255
//alert( 0xFF ); // 255 (the same, case doesn't matter)

let num = 255;
console.log(typeof num);
console.log(typeof num.toString())
console.log(typeof num.toString(16)) // base=16 is used 
// for hex colors, character encodings etc, digits can be 0..9 or A..F.

console.log( 123456..toString(36) ); // 2n9c two dots to call a method directly on a number

console.log(parseInt("100px"));
console.log(parseFloat("12.5em"));

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);