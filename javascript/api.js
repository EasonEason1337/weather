// import anything you need from utils.js if required

export async function fetchWeather(lat, lon) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.current_weather;
  } catch (error) {
    console.log("fetchWeather failed: ", error.message);
    return null;
  }
}
