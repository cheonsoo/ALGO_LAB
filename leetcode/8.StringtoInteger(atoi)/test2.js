/**
 * @param {string} s
 * @return {number}
 */

const isNum = (letter) => {
  if ((letter && !isNaN(letter)) || letter === '-' || letter === ' ')
    return true;
  else
    return false;
};

var myAtoi = function(s) {
  if (!isNum(s.charAt(0)))
    return 0;

  const regexp = new RegExp(/[-0-9]/, 'gi');
  let num = '';
  let isNegative = false;
  for (let i=0; i<s.length; i++) {
      const letter = s.charAt(i);

      if (isNum(letter)) {
          if (letter === '-') {
            isNegative = true;
          } else if (letter === ' ') {
          } else {
            num += letter;
          }

          const nextLetter = s.charAt(i+1);
          if (!isNum(nextLetter))
              break;
      }
  }

  num = parseInt(isNegative ? num * -1 : num)
  if (num >= 2**31)
    return 2**31;
  if (num <= -(2**31))
    return -(2**31);

  return num;
};

// const input = '42';
// const input = '-42';
// const input = '4193 with words';
// const input = 'words and 987';
// const input = '-91283472332';
// const input = '-+12';
const input = '+1';
const result = myAtoi(input);
console.log('result', result);