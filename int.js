const randNum = require('./num');

const randInt = (range, min = 0) => Math.floor(randNum(range, Math.ceil(min)));

module.exports = randInt;
