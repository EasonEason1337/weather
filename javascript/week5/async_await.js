// With .then() chaining
function getWeather() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-41.28&longitude=174.77&current_weather=true",
  )
    .then((response) => response.json())
    .then((data) => console.log(data.current_weather))
    .catch((error) => console.log(error));
}

// Same thing with async/await — easier to read
async function getWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-41.28&longitude=174.77&current_weather=true",
  );
  const data = await response.json();
  console.log(data.current_weather);
}

async function loadData() {
  console.log("A — before await");
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-41.28&longitude=174.77&current_weather=true",
  );
  console.log("C — after await, response is ready");
  const data = await response.json();
  console.log("D — data is parsed");
  //console.log(data);
}

loadData();
console.log("B — this runs while loadData is waiting");

// Rewrite this .then() chain using async/await
// Use the open-meteo URL for Auckland: latitude=-36.86&longitude=174.76

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=-41.28&longitude=174.77&current_weather=true",
)
  .then((response) => response.json())
  .then((data) => {
    const temp = data.current_weather.temperature;
    console.log(`Auckland temperature: ${temp}°C`);
  })
  .catch((error) => console.log("Error:", error));

// Your async/await version:
async function getAucklandWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-41.28&longitude=174.77&current_weather=true",
  );
  const data = await response.json();
  console.log(`Auckland temperature: ${data.current_weather.temperature}`);
}

getAucklandWeather();
