import { formatTemp, formatWind } from "./utils.js";

export function createCard(city, weather) {
  // paste your createCard function from Week 4 here
  // update it to use formatTemp() and formatWind()
  const card = document.createElement("div");
  card.className = "city-card";
  // your code here
  if (!weather) {
    card.innerHTML = `
    <h2>${city.name}</h2>
    <p class=error>Could not load Weather data</p>`;
    return card;
  }
  card.innerHTML = `<h2>${city.name}</h2>
  <p class="temp">${formatTemp(weather.temperature)}</p>
  <p class="detail">${formatWind(weather.windspeed, weather.winddirection)}</p>`;
  return card;
}
