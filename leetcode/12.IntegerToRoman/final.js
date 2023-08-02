const romans = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = '';
  while (num != 0) {
    for (let key of Object.keys(romans).reverse()) {
      if (num >= key) {
        result += romans[key];
        num -= key;
        break;
      }
    }
  }

  return result;
};
