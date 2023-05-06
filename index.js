import { apiKey } from "./config.js";
import { getCurrentWeather } from "./htmlGenerator.js";

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
    const { data } = await axios.get(currentWeatherAPI);
    console.log(data);
    getCurrentWeather(data);
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
      console.log(data);
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
