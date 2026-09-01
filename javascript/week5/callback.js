// Synchronous code — runs line by line, no waiting
console.log("1. Start");
console.log("2. Middle");
console.log("3. End");
// prints: 1, 2, 3 — in order, every time

// Now introduce a delay — setTimeout waits X milliseconds then runs a function
console.log("1. Start");

setTimeout(function () {
  console.log("2. Middle — but this is delayed");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("3. End");
// prints: 1, 3, 2 — JavaScript doesn't wait for the timer!

function getRegionData(regionName, callback) {
  // Simulating a delay (like a network request)
  setTimeout(function () {
    const data = { name: regionName, population: 215_000 };
    callback(data); // "call me back when you're done"
  }, 1000);
}

getRegionData("Wellington", function (result) {
  console.log(result); // runs after 1 second
});

console.log("This runs immediately, before the result");

function delayedGreeting(name, delay) {
  setTimeout(() => console.log(`kia ora, ${name}`), delay);
}

delayedGreeting("eason", 4000);
