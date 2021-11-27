const { default: got } = require("got/dist/source");
const openWeatherAPI = process.env.API_OPEN_WEATHER;

class Weather {
  fetchWeatherData = (city, callback) => {
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${openWeatherAPI}`;
    got(urlAPI).then((response) => callback(JSON.parse(response.body)));
  };
}

module.exports = Weather;
