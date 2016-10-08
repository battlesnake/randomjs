const randChar = require('./char');

module.exports = charset => {
	const rc = randChar(charset);
	return count => [...new Array(count)].map(rc).join('');
};
