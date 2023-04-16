const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let variants = [];
	let nArr = n.toString().split('');
	console.log(nArr);
	// throw new NotImplementedError('Not implemented');
	// remove line with error and write your code here
	for (let i = 0; i < nArr.length; i++) {
		let current = [...nArr];
		current.splice(i, 1);
		/*    console.log(current);
			 console.log(nArr); */
		variants.push(current.join(''));
	}
	console.log(variants);
	console.log(Math.max(...variants));
	return (Math.max(...variants));
}

module.exports = {
	deleteDigit
};
