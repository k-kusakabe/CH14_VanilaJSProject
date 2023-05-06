const currentWeather = document.getElementById("currentWeatherContainer");

//Get current weather
export const getCurrentWeather = (weatherData) => {
  currentWeather.innerHTML = `<h2>Current Weather</h2>
                              <img src="https://openweathermap.org/img/wn/${
                                weatherData.weather[0].icon
                              }@2x.png" alt="weather icon">
                              <p>${weatherData.weather[0].description}</p>
                              <p>Temp: ${Math.round(
                                weatherData.main.temp - 273.15
                              )}&#8451;</p>
                              <p>Humidity: ${weatherData.main.humidity}%</p>`;
};
