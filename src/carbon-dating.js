const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	let result = false;
	console.log(sampleActivity);
	if ((typeof sampleActivity) == 'string' && sampleActivity !== '0' && sampleActivity !== '' && sampleActivity !== ' \n\t\r' && sampleActivity !== ' ') {
		result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * (HALF_LIFE_PERIOD / Math.log(2)));
	}

	if (isNaN(result) || result < 0) {
		return false;
	}

	return result;
}

module.exports = {
  dateSample
};
