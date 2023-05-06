const currentWeather = document.getElementById("currentWeatherContainer");
const hourlyWeather = document.getElementById("hourlyWeatherContainer");

//Get current weather
export const getCurrentWeather = (data) => {
  currentWeather.innerHTML = `<div class="currentWeather">
                              <h2>Current Weather</h2>
                              <img src="https://openweathermap.org/img/wn/${
                                data.list[0].weather[0].icon
                              }@2x.png" alt="weather icon">
                              <p>${data.list[0].weather[0].description}</p>
                              <p>Temp: ${Math.round(
                                data.list[0].main.temp - 273.15
                              )}&#8451;</p>
                              <p>Humidity: ${
                                data.list[0].main.humidity
                              }%</p><div>`;
};

//Get hourly weather (every 3 hours)
export const getHourlyWeather = (hourlyWeatherData) => {
  const timeArray = ["In 3 hours", "In 6 hours", "In 9 hours", "In 12 hours"];
  const hourlyWeatherDataMap = hourlyWeatherData.map((item, index) => {
    return `<div class="hourlyWeather">
                             <h2>${timeArray[index]}</h2>
                             <img src="https://openweathermap.org/img/wn/${
                               item.weather[0].icon
                             }@2x.png" alt="weather icon">
                             <p>${item.weather[0].description}</p>
                             <p>Temp: ${Math.round(
                               item.main.temp - 273.15
                             )}&#8451;</p>
                            <p>Humidity: ${item.main.humidity}%</p>
                             </div>`;
  });
  hourlyWeather.innerHTML = hourlyWeatherDataMap.join("");
};
