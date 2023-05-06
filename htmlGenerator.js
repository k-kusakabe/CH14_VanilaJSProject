const currentWeather = document.getElementById("currentWeatherContainer");
const hourlyWeather = document.getElementById("hourlyWeatherContainer");

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

//Get hourly weather (every 3 hours)
export const getHourlyWeather = (forecastData) => {
  hourlyWeather.innerHTML = `<div class="hourlyWeather">
                             <h2>In 3 hours</h2>
                             <img src="https://openweathermap.org/img/wn/${
                               forecastData.list[0].weather[0].icon
                             }@2x.png" alt="weather icon">
                             <p>${
                               forecastData.list[0].weather[0].description
                             }</p>
                             <p>Temp: ${Math.round(
                               forecastData.list[0].main.temp - 273.15
                             )}&#8451;</p>
                            <p>Humidity: ${
                              forecastData.list[0].main.humidity
                            }%</p>
                             </div>`;
};
