async function getWeather(city, lat, lon) {
  const container = document.querySelector('#weather')
  container.textContent = 'Loading...'

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    const response = await fetch(url)

    // fetch itself only throws on network failure (no internet, DNS error)
    // A 404 or 500 response does NOT throw — you have to check manually
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`)
    }

    const data = await response.json()
    const temp = data.current_weather.temperature
    const wind = data.current_weather.windspeed

    container.textContent = `${city}: ${temp}°C, wind ${wind} km/h`

  } catch (error) {
    // Catches both network failures AND our manual throw above
    console.error('Failed to load weather:', error.message)
    container.textContent = 'Could not load weather data. Try again.'
  }
}

getWeather('Auckland',    -36.86, 174.76)
getWeather('Wellington',  -41.28, 174.77)
getWeather('Christchurch',-43.53, 172.64)