const got = require("got");
const openWeatherAPI = process.env.API_OPEN_WEATHER;
const city = "London";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${openWeatherAPI}`;

const fetchWeatherInfo = (url, callback) => {
  got(url).then((response) => {
    // The value of "then" is invoked when the result is received from the got request
    callback(response);
  });
};

// fetchWeatherInfo(apiURL, (response) => {
//   let bodyResponse = JSON.parse(response.body);
//   // console.log(bodyResponse);
//   console.log(`The temperature in ${city} is ${bodyResponse.main.temp}`);
// });

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
      // console.log(bodyResponse);
      console.log(
        `The temperature in ${city} is ${bodyResponse.main.temp}, weather: ${bodyResponse.weather[0].main}`
      );
    }
  );
});

console.log("Requesting weather data...");
