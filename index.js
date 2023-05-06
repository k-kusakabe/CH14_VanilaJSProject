import { apiKey } from "./config.js";
import { getCurrentWeather } from "./htmlGenerator.js";
import { getHourlyWeather } from "./htmlGenerator.js";

const button = document.getElementById("button");
const cityName = document.getElementById("siteSearch");
const main = document.getElementById("main");
const currentWeather = document.getElementById("currentWeatherContainer");
const hourlyWeather = document.getElementById("hourlyWeatherContainer");

// get current weather by button click
button.addEventListener("click", async () => {
  const value = cityName.value;
  try {
    const currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`;
    const hourlyWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apiKey}`;
    //get weather info from both APIs
    const { data } = await axios.get(currentWeatherAPI);
    //set another variable for hourly weatherAPI since this cannot be destructured due to api1.
    const api2 = await axios.get(hourlyWeatherAPI);
    const forecastData = api2.data;
    // console.log(data);
    console.log(forecastData);
    //Run getCurrentWeather func & getHourlyWeather func
    getCurrentWeather(data);
    getHourlyWeather(forecastData);
  } catch (error) {
    console.log(error);
    if (error.response) {
      currentWeather.innerHTML = `<h3 class="errorMessage1">City name is invalid. Enter a valid name</h3>`;
    } else {
      currentWeather.innerHTML = `<h3 class="errorMessage2">Currently, weather info cannot be accessed. Please visit the site later</h3>`;
    }
  }
});

// get current weather by Enter key
cityName.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const value = cityName.value;
    try {
      const currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`;
      const { data } = await axios.get(currentWeatherAPI);
      getCurrentWeather(data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        currentWeather.innerHTML = `<h3 class="errorMessage1">City name is invalid. Enter a valid name</h3>`;
      } else {
        currentWeather.innerHTML = `<h3 class="errorMessage2">Currently, weather info cannot be accessed. Please visit the site later</h3>`;
      }
    }
  }
});
