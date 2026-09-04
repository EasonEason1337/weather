function getName(name) {
  return console.log(name);
}
getName("Eason"); // "Eason"

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

showPrimes(3);

function min(a, b) {
  return a < b ? a : b;
}

//Arrow functions (parameters) => expression

function hello() {
  console.log("Hello");
}

hello();

const hello2 = function () {
  console.log("Hello2");
};

hello2();

const hello3 = () => console.log("Hello3");

hello3();

const hello4 = (name, age) => {
  console.log(`Hello ${name}, you are ${age} years old.`);
};

hello4("Eason", 21);

setTimeout(function () {
  console.log("Hello after 1 second");
}, 1000);

setTimeout(() => console.log("hello"), 1000);
