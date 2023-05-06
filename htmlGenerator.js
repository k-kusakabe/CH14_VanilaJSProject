const currentWeather = document.getElementById("currentWeatherContainer");

export const getCurrentWeather = (data) => {
  currentWeather.innerHTML = `<h2>Current Weather</h2><h3>${new Date(
    data.list[0].dt * 1000
  ).toLocaleString()}</h3>`;
};
