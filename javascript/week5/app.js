const cities = [
  { name: "Auckland", lat: -36.86, lon: 174.76 },
  { name: "Wellington", lat: -41.28, lon: 174.77 },
  { name: "Christchurch", lat: -43.53, lon: 172.64 },
  { name: "Dunedin", lat: -45.88, lon: 170.5 },
  { name: "Hamilton", lat: -37.78, lon: 175.28 },
];

const grid = document.querySelector("#grid");

// TASK 1 — write this function
// It should fetch weather for one city from open-meteo
// URL: https://open-meteo.com/v1/forecast
//   ?latitude={lat}&longitude={lon}&current_weather=true
// Return the current_weather object from the response
// Handle errors — return null if anything fails
async function fetchWeather(lat, lon) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return data.current_weather;
  } catch (error) {
    console.log("fetchWeather failed: ", error.message);
    return null;
  }
}

// TASK 2 — write this function
// It receives a city object and a weather object (or null)
// It should return a card div with:
//   - City name as h2
//   - Temperature as a large number with °C
//   - Wind speed and direction
//   - If weather is null, show an error message instead
function createCard(city, weather) {
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
  <p class="temp">${weather?.temperature}°C</p>
  <p class="detail">Wind: ${weather?.windspeed} km/h · Direction: ${weather?.winddirection}°</p>`;
  return card;
}

// TASK 3 — write this function
// It should:
//   1. Clear the grid
//   2. For each city, create a placeholder card showing 'Loading...'
//      and add it to the grid immediately (so the user sees something)
//   3. Then fetch weather for ALL cities simultaneously (hint: Promise.all)
//   4. Update each placeholder card with the real data when it arrives
async function loadAllCities() {
  // your code here
  grid.innerHTML = "";
  const placeholders = [];

  cities.forEach((city) => {
    const placeholder = document.createElement("div");
    placeholder.className = "city-card";
    placeholder.textContent = "Loading...";
    placeholders.push(placeholder);
    grid.appendChild(placeholder);
  });

  const results = await Promise.all(
    cities.map((city) => fetchWeather(city.lat, city.lon)),
  );
  
  results.forEach((weather, index) => {
    const city = cities[index];
    const card = createCard(city, weather);
    placeholders[index].replaceWith(card);
  });
}

// Initial load
loadAllCities();

// Refresh button
document.querySelector("#refresh").addEventListener("click", loadAllCities);
