const currentWeather = document.getElementById("currentWeatherContainer");
const hourlyWeather = document.getElementById("hourlyWeatherContainer");

//Get current weather
export const getCurrentWeather = (data) => {
  currentWeather.innerHTML = `<h2>Current Weather</h2>
                              <img src="https://openweathermap.org/img/wn/${
                                data.list[0].weather[0].icon
                              }@2x.png" alt="weather icon">
                              <p>${data.list[0].weather[0].description}</p>
                              <p>Temp: ${Math.round(
                                data.list[0].main.temp - 273.15
                              )}&#8451;</p>
                              <p>Humidity: ${data.list[0].main.humidity}%</p>`;
};

//Get hourly weather (every 3 hours)
export const getHourlyWeather = (hourlyWeatherData) => {
  hourlyWeather.innerHTML = `<div class="hourlyWeather">
                             <h2>In 3 hours</h2>
                             <img src="https://openweathermap.org/img/wn/${
                               hourlyWeatherData[0].weather[0].icon
                             }@2x.png" alt="weather icon">
                             <p>${
                               hourlyWeatherData[0].weather[0].description
                             }</p>
                             <p>Temp: ${Math.round(
                               hourlyWeatherData[0].main.temp - 273.15
                             )}&#8451;</p>
                            <p>Humidity: ${
                              hourlyWeatherData[0].main.humidity
                            }%</p>
                             </div>`;
};
