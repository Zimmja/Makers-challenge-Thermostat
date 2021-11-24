class Thermostat {
  constructor() {
    this.temperatureDefault = 20;
    this.temperature = this.temperatureDefault;
    this.powerSaver = true;
  }

  getTemperature = () => this.temperature;

  up = () => {
    if (this.temperature < this.maxtemp()) {
      this.temperature += 1;
    };
  };

  down = () => {
    if (this.temperature > 10) {
      this.temperature -= 1;
    };
  };

  maxtemp = () => {
    if (this.powerSaver == true) {
      return 25;
    } else {
      return 32;
    };
  };

  setPowerSavingMode = (powerBool) => this.powerSaver = powerBool;

  reset = () => this.temperature = this.temperatureDefault;

  getUsage = () => {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature > 25) {
      return "high-usage";
    } else {
      return "medium-usage";
    };
  };

};

module.exports = Thermostat;
