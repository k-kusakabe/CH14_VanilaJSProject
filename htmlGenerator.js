const currentWeather = document.getElementById("currentWeatherContainer");

//Get current weather
export const getCurrentWeather = (data) => {
  currentWeather.innerHTML = `<h2>Current Weather</h2>
                              <img src="https://openweathermap.org/img/wn/${
                                data.weather[0].icon
                              }@2x.png" alt="weather icon">
                              <p>${data.weather[0].description}</p>
                              <p>Temp: ${Math.round(
                                data.main.temp - 273.15
                              )}&#8451;</p>
                              <p>Humidity: ${data.main.humidity}%</p>`;
};
