var reverse = function(x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x *= -1;
  }

  let rev = 0;
  while(x != 0) {
    const pop = x % 10;
    x = parseInt(x /= 10);
    rev = rev * 10 + pop;
  }

  rev = isNegative ? rev * -1 : rev;

  if (rev >= 2147483648 || rev <= -2147483648)
    return 0;

  return rev;
};

const x = 123;
// const x = -123;
// const x = 120;
// const x = 1534236469;
const result = reverse(x);
console.log('result: ', result);
