const Weather = require("./weatherReport");

class Thermostat {
  constructor(weather) {
    this.weather = weather;
    this.city = null;
    this.temperatureDefault = 20;
    this.temperature = this.temperatureDefault;
    this.powerSaver = true;
  }

  getTemperature = () => {
    if (this.city != null) {
      let weather = this.weather;
      weather.fetchWeatherData(
        this.city,
        (report) => (this.temperature = report.main.temp)
      );
    }
    return this.temperature;
  };

  setCity = (city) => (this.city = city);

  up = () => {
    if (this.temperature < this.maxtemp()) {
      this.temperature += 1;
    }
  };

  down = () => {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  };

  maxtemp = () => {
    if (this.powerSaver == true) {
      return 25;
    } else {
      return 32;
    }
  };

  setPowerSavingMode = (powerBool) => (this.powerSaver = powerBool);

  reset = () => (this.temperature = this.temperatureDefault);

  getUsage = () => {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature > 25) {
      return "high-usage";
    } else {
      return "medium-usage";
    }
  };
}

module.exports = Thermostat;

// const weather = new Weather();
// const thermostat = new Thermostat(weather);
// thermostat.setCity("London");
// console.log(thermostat.city);
// console.log(thermostat.getTemperature());
