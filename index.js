// import data from modules
import { apiKey } from "./config.js";
import { getCurrentWeather } from "./htmlGenerator.js";
import { getHourlyWeather } from "./htmlGenerator.js";

//get elements by ID
const button = document.getElementById("button");
const cityName = document.getElementById("siteSearch");
const main = document.getElementById("main");
const currentWeather = document.getElementById("currentWeatherContainer");
const hourlyWeather = document.getElementById("hourlyWeatherContainer");

// get current weather by button click
button.addEventListener("click", async () => {
  const value = cityName.value;
  try {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apiKey}`;
    //get weather info from both APIs
    const { data } = await axios.get(weatherAPI);
    //extract only necessary arrays by .slice
    const hourlyWeatherData = data.list.slice(1, 5);
    console.log(data);
    console.log(hourlyWeatherData);
    //Run getCurrentWeather func & getHourlyWeather func
    getCurrentWeather(data);
    getHourlyWeather(hourlyWeatherData);
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
      const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apiKey}`;
      //get weather info from both APIs
      const { data } = await axios.get(weatherAPI);
      //extract only necessary arrays by .slice
      const hourlyWeatherData = data.list.slice(1, 5);
      //Run getCurrentWeather func & getHourlyWeather func
      getCurrentWeather(data);
      getHourlyWeather(hourlyWeatherData);
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
