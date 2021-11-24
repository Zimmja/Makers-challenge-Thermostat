let readlineSync = require('readline-sync');
const Thermostat = require("./thermostat");

const myThermostat = new Thermostat;

const suffix = (temp) => {
  if (temp === 10) {
    return " (minimum reached)";
  } else if (temp === myThermostat.maxtemp()) {
    return " (maximum reached)";
  } else {
    return ""
  };
};

let enablewhile = true;
while (enablewhile == true) {
  let temp = myThermostat.getTemperature()
  console.log(`Temperature is ${temp}${suffix(temp)}`);
  let command = readlineSync.question("Enter command > ");
  if (command === "up") {
    myThermostat.up();
  } else if (command === "down") {
    myThermostat.down();
  } else if (command === "psm on") {
    myThermostat.setPowerSavingMode(true);
  } else if (command === "psm off") {
    myThermostat.setPowerSavingMode(false);
  } else if (command === "exit") {
    enablewhile = false;
  };
};

console.log("Goodbye.")