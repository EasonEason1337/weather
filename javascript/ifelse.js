let year = prompt("Enter the year Eason was born: ");
if (year == 2005) {
  console.log("Correct!");
} else if (year < 2005) {
  console.log("Too early!");
} else {
  console.log("Too late!");
}

if (0) {
} // 0 is falsy, so this block will not execute
if (1) {
} // 1 is truthy, so this block will execute

let age = year > 2005 ? "hey dude" : "hey boy";
