console.log("starting");

setTimeout(function () {
  console.log("This runs later");
}, 2000);
console.log("this runs immediately");

const fakeApiCall = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const success = false;
    if (success) {
      resolve("Auckland risk data loaded");
    } else {
      reject("Failed to load data");
    }
  }, 1000);
});

fakeApiCall
  .then(function (result) {
    console.log("Success", result);
  })
  .catch(function (error) {
    console.log("Error: ", error);
  });

function getRiskData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Wellington risk data loaded");
    }, 1000);
  });
}

async function run() {
  console.log("A");
  await getRiskData(); // takes 1 second
  console.log("B");
}

console.log("Start");
run();
console.log("End");

