import { apiKey } from "./config.js";
import { getCurrentWeather } from "./htmlGenerator.js";

const button = document.getElementById("button");
const cityName = document.getElementById("siteSearch");
const main = document.getElementById("main");
const currentWeather = document.getElementById("currentWeatherContainer");
const hourlyWeather = document.getElementById("hourlyWeatherContainer");

button.addEventListener("click", async () => {
  const value = cityName.value;
  try {
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apiKey}`;
    const { data } = await axios.get(apiURL);
    console.log(data.list);
    getCurrentWeather(data);
  } catch (error) {
    console.log(error);
    currentWeather.innerHTML = `<p>City name is invalid. Enter a valid name</p>`;
  }
});
