export function formatTemperature(temp) {
  return `${temp}°C`;
}

export function formatWind(speed, direction) {
  return `${speed} km/h · ${direction}°`;
}

export const NZ_CITIES = [
  { name: "Auckland", lat: -36.86, lon: 174.76, island: "North Island" },
  { name: "Wellington", lat: -41.28, lon: 174.77 },
  { name: "Christchurch", lat: -43.53, lon: 172.64 },
];

export default function formatCityTitle(city) {
  return `${city.name} (${city.island ?? "NZ"})`;
}
