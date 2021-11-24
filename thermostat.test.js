const Thermostat = require("./thermostat");

describe(".getTemperature", () => {
  it('returns the current temperature', () => {
    let testStat = new Thermostat;
    expect(testStat.getTemperature()).toBe(20);
  });
});

describe(".reset", () => {
  it('returns the temperature to the default value', () => {
    let testStat = new Thermostat;
    for (let i = 1; i < 10; i++ ) {
      testStat.up()
    };
    expect(testStat.getTemperature()).toBeGreaterThan(20);
    testStat.reset()
    expect(testStat.getTemperature()).toBe(20);
  });
});

describe(".getUsage", () => {
  let testStat = new Thermostat;
  it('returns low-usage below 18 degrees', () => {
    for (let i = 1; i < 50; i++ ) {
      testStat.down();
    };
    expect(testStat.getUsage()).toEqual("low-usage");
  });
  it('returns high-usage above 25 degrees', () => {
    testStat.setPowerSavingMode(false)
    for (let i = 1; i < 50; i++ ) {
      testStat.up();
    };
    expect(testStat.getUsage()).toEqual("high-usage");
  });
  it('returns medium-usage from 18 to 25 degrees', () => {
    testStat.reset();
    expect(testStat.getUsage()).toEqual("medium-usage");
  });
});


describe(".up", () => {
  it('increases the temperature', () => {
    let testStat = new Thermostat;
    for (let i = 1; i < 3; i++ ) {
      testStat.up();
      expect(testStat.getTemperature()).toBe(20 + i);
    };
  });

  it('cannot increase the temperature over the power saving maximum of 25', () => {
    let testStat = new Thermostat;
    testStat.setPowerSavingMode(true)
    for (let i = 1; i < 50; i++ ) {
      testStat.up();
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
      testStat.down();
    };
    expect(testStat.getTemperature()).toBe(10);
  });
});
