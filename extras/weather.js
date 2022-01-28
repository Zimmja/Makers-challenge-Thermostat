const got = require("got");
const openWeatherAPI = require("../api.js");

const fetchWeatherInfo = (url, callback) => {
  got(url).then((response) => {
    callback(response);
  });
};

const cities = [
  "London",
  "Paris",
  "Madrid",
  "Bagdad",
  "New York",
  "York",
  "Cardiff",
  "Rome",
  "Yakutsk",
  "Anadyr",
  "Gibraltar",
];
cities.forEach((city) => {
  fetchWeatherInfo(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${openWeatherAPI}`,
    (response) => {
      let bodyResponse = JSON.parse(response.body);
      console.log(
        `The temperature in ${city} is ${bodyResponse.main.temp}, weather: ${bodyResponse.weather[0].main}`
      );
    }
  );
});

console.log("Requesting weather data...");
