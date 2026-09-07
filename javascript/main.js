import { CITIES as cities } from "./constants.js";
import { fetchWeather } from "./api.js";
import { createCard } from "./render.js";
console.table(cities);
const grid = document.querySelector("#grid");

async function loadAllCities() {
  // paste your loadAllCities function from Week 4 here
  // it should work identically — just with imports instead of everything in one file
  grid.innerHTML = "";
  const timestamp = document.querySelector("#timestamp");
  if (timestamp) {
    timestamp.textContent = "Loading...";
  }
  const placeholders = [];

  cities.forEach((city) => {
    const placeholder = document.createElement("div");
    placeholder.className = "city-card";
    placeholder.textContent = "Loading...";
    placeholders.push(placeholder);
    grid.appendChild(placeholder);
  });

  console.time("load all cities");
  const results = await Promise.all(
    cities.map((city) => fetchWeather(city.lat, city.lon)),
  );
  console.timeEnd("load all cities");

  results.forEach((weather, index) => {
    const city = cities[index];
    const card = createCard(city, weather);
    placeholders[index].replaceWith(card);
  });

  const now = new Date();
  if (timestamp) {
    timestamp.textContent = `Last updated: ${now.toLocaleTimeString("en-NZ")}`;
  }
}

loadAllCities();
document.querySelector("#refresh").addEventListener("click", loadAllCities);
