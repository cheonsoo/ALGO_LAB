/**
 * @param {string} s
 * @return {number}
 */
const romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

var romanToInt = function (input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const current = input.charAt(i) + input.charAt(i + 1);
    if (romans[current]) {
      sum += romans[current];
      i++;
    } else {
      sum += romans[input.charAt(i)];
    }
  }
  return sum;
};
