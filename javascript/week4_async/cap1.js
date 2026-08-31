async function loadCountryCard() {
  const container = document.querySelector("#country-info");
  container.textContent = "Loading...";

  try {
    const response = await fetch("https://countries.dev/alpha/NZ");
    if (!response.ok) throw new Error(`Status ${response.status}`);
    const data = await response.json();

    container.textContent = "";
    const card = document.createElement("div");
    const langNames = data.languages.map((lang) => lang.name).join(", ");
    card.textContent = `${data.name}'s population is ${data.population.toLocaleString()},
    the capital is ${data.capital}, a language they speak is ${langNames}`;
    container.appendChild(card);
  } catch (error) {
    container.textContent = "Failed to load country data";
  }
}

loadCountryCard();
const butt = document.querySelector("#refresh");

butt.addEventListener("click", function () {
  loadCountryCard();
});
