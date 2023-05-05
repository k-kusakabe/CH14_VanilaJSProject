import { apiKey } from "./config.js";

const button = document.getElementById("button");
const cityName = document.getElementById("siteSearch");

button.addEventListener("click", async () => {
  const value = cityName.value;
  const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apiKey}`;
  const { data } = await axios.get(apiURL);
  console.log(data.list);
});
