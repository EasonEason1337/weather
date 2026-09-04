export function formatTemp(temp) {
  return `${temp}°C`;
}

export function formatWind(speed, direction) {
  return `${speed} km/h · ${degreesToCompass(direction)} (${direction}°)`;
}

export function degreesToCompass(degrees) {
  const points = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return points[index];
}
