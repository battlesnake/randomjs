const randInt = require('./int');

/* 62 chars in charset ≈ 5.954 bits of entropy per character */
const defRandCharset = '0123456789' +
	'abcdefghijklmnopqrstuvwxyz' +
	'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = charset => {
	charset = charset || defRandCharset;
	return () => charset.charAt(randInt(charset.length));
};
