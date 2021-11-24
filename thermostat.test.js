const Thermostat = require("./thermostat");

describe(".getTemperature", () => {
  it('returns the current temperature', () => {
    let testStat = new Thermostat
    expect(testStat.getTemperature()).toBe(20);
  });
});
