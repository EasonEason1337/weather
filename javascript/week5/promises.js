const myPromise = new Promise(function (resolve, reject) {
  const success = true;

  if (success) {
    resolve("Here is your data");
  } else {
    reject("Something went wrong");
  }
});

myPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

const p1 = fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=-36.86&longitude=174.76&current_weather=true",
);
const p2 = fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=-41.28&longitude=174.77&current_weather=true",
);

Promise.all([p1, p2])
  .then(function (responses) {
    // responses is an array — both have finished
    return Promise.all(responses.map((r) => r.json()));
  })
  .then(function (results) {
    console.log("Auckland weather:", results[0].current_weather);
    console.log("Wellington weather:", results[1].current_weather);
  });

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Otago data loaded");
  }, 1000);
});

fetchData.then((value) => {
  console.log(value);
});

const r = new Promise((resolve, reject) => {
  reject("Network error");
});

r.then(() => {
  console.log("Eason is cools");
}).catch((error) => {
  console.log(error);
});

console.log('start')

const p = new Promise(resolve => {
  console.log('inside promise')
  resolve('done')
})

p.then(val => console.log(val))

console.log('end')