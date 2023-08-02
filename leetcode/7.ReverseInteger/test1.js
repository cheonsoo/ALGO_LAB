/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x *= -1;
  }

  const numSize = x.toString().length;
  let result = 0;

  let i = 10;
  let idx = 0;
  while(x) {
    const rest = x % i;
    result += rest * Math.pow(10, numSize - 1 - idx);
    x = (x - rest) / 10;
    idx++;
  }

  result = isNegative ? result * -1 : result;

  if (result >= 2147483648 || result <= -2147483648)
    return 0;
  
  return result;
};

// const x = 123;
// const x = -123;
// const x = 120;
const x = 1534236469;
const result = reverse(x);
console.log('result: ', result);

2147483648
1534236469