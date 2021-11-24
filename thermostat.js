class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaver = true
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

};

module.exports = Thermostat;
