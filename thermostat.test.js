const Thermostat = require("./thermostat");

describe(".getTemperature", () => {
  it('returns the current temperature', () => {
    let testStat = new Thermostat;
    expect(testStat.getTemperature()).toBe(20);
  });
});

describe(".up", () => {
  it('increases the temperature', () => {
    let testStat = new Thermostat;
    for (let i = 1; i < 3; i++ ) {
      testStat.up()
      expect(testStat.getTemperature()).toBe(20 + i);
    };
  });

  it('cannot increase the temperature over the power saving maximum of 25', () => {
    let testStat = new Thermostat;
    testStat.setPowerSavingMode(true)
    for (let i = 1; i < 50; i++ ) {
      testStat.up()
    };
    expect(testStat.getTemperature()).toBe(25);
  });

  it('cannot increase the temperature over the non-power saving maximum of 32', () => {
    let testStat = new Thermostat;
    testStat.setPowerSavingMode(false)
    for (let i = 1; i < 50; i++ ) {
      testStat.up()
    };
    expect(testStat.getTemperature()).toBe(32);
  });
});

describe(".down", () => {
  it('decreases the temperature', () => {
    let testStat = new Thermostat;
    expect(testStat.getTemperature()).toBe(20);
    testStat.down();
    expect(testStat.getTemperature()).toBe(19);
  });

  it('cannot decrease the temperature below the minimum of 10', () => {
    let testStat = new Thermostat;
    for (let i = 1; i < 50; i++ ) {
      testStat.down()
    };
    expect(testStat.getTemperature()).toBe(10);
  });
});
