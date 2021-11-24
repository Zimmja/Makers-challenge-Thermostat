let readlineSync = require('readline-sync');

let userName = readlineSync.question("What is your name? ");
console.log(`Welcome ${userName}!`);
