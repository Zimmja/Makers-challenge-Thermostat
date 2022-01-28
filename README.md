## Introduction

As part of the Makers Adademy Week 6 challenge, we were tasked with learning how to write with JavaScript using Node and Jest, with an emphasis on understanding how to pass functions as properties, and understanding how to use asynchronous functions to make API calls. This culminated in the creation of a simple Thermostat programme, which could be interacted with through Node via the command line. I completed this with [Tatiana Nantes](https://github.com/tatiananantes), [Sigita Zebrauskaite](https://github.com/sigii1992), and [Blessing Aliu](https://github.com/blessingaliu).

## Instructions for use

### Setup:

1. Clone this repository to a local directory
2. Ensure you have Node installed (v17.1.0 or higher)
3. Open the command line in the root directory

In line with the requirements for the exercise, there are two ways to interact with this repo: a CLI prompt that utilises the readline package, and directly with the thermostat.js file to interact with an API.

### CLI prompt:

To open, enter into the command line: `node cli.js`

This creates a thermostat with a default value of 20. The user has access to a command line with the following commands:

1. `up` increases the value of the thermostat by 1
2. `down` decreases it by 1. Note: the temperature can not be decreased passed 10 degrees
3. `psm on` activates power saver mode. When active, the maximum temperature that can be reached is 25. When inactive, it's 3
4. `psm off` deactivates power saver mode
5. `exit` will exit the CLI prompt

### OpenWeather API:

You can use this thermostat to interact with the OpenWeatherMap API to get the real-world temperature of a city.

1. You will need an API key to use this feature. Go to [OpenWeatherMap.org](https://openweathermap.org/) and get an API key (you'll need to sign up if you don't have an account). Once you have an API key (check https://home.openweathermap.org/api_keys), copy it to your clipboard
2. In the root directory, create a file called `api.js`. Inside this file, enter `module.exports = ` and then paste your API key in place (i.e. so it reads `module.exports = [your API key]`)
3. On the command line, enter: `node`, `const Thermostat = require("./thermostat.js")`, then `const myThermostat = new Thermostat()`
4. To get the temperature in e.g. London, enter into the command line `myThermostat.getTemperature("London")`

### Stretch goal:

Just for fun, I added the capability to quickly get the temperature of several cities from around the world. To access this, simply enter `node ./extras/weather.js` into the command line from the root directory.

## Technologies

- Node
- Jest
- readline-sync
