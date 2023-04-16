const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	// throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	let count = 0;
	const s1Arr = [...s1];
	const s2Arr = [...s2];
	const s1Obj = {};
	const s2Obj = {};

	s1Arr.forEach((item, index) => {
		s1Obj[item] = s1Obj[item] ? s1Obj[item] + 1 : 1;
	});

	s2Arr.forEach((item, index) => {
		s2Obj[item] = s2Obj[item] ? s2Obj[item] + 1 : 1;
	});

	for (let key in s1Obj) {
		if (s2Obj[key] !== undefined) {
			if (s1Obj[key] > s2Obj[key]) {
				count += s2Obj[key];
			} else {
				count += s1Obj[key];
			}
		}
	}


	console.log(s1Obj);
	console.log(s2Obj);
	console.log(count);
	return count;
}

module.exports = {
	getCommonCharacterCount
};
