/**
 * @param {string} s
 * @return {number}
 */

const isNum = (letter, num) => {
  if ((letter && !isNaN(letter)) || letter === '-' || letter === '+' || letter === ' ') {
    if (num && (letter === '-' || letter === '+' || letter === ' '))
      return false;
    return true;
  } else {
    return false;
  }
};

var myAtoi = function(s) {
  s = s.trim();
  if (s.length === 1)
    return (!isNaN(s) && s !== ' ') ? parseInt(s) : 0;
  if (!isNum(s.charAt(0), '') || !isNum(s.charAt(0) + s.charAt(1), ''))
    return 0;

    let num = '';
    const regexp = new RegExp(/[-0-9]/, 'gi');
  let isNegative = false;
  for (let i=0; i<s.length; i++) {
      const letter = s.charAt(i);

      if (isNum(letter, num)) {
          if (letter === '-') {
            isNegative = true;
          } else if (letter === ' ') {
          } else {
            num += letter;
          }

          const nextLetter = s.charAt(i+1);
          if (!isNum(nextLetter, num))
              break;
      }
  }

  num = parseInt(isNegative ? num * -1 : num)
  if (num >= 2**31)
    return 2**31 -1;
  if (num <= -(2**31))
    return -(2**31);

  return num;
};

// const input = '42';
// const input = '-42';
// const input = '4193 with words';
// const input = 'words and 987';
// const input = '-91283472332'; // output = -2147483648
// const input = '-+12'; // output = 0
// const input = '+1';
// const input = '+';
// const input = ' ';
// const input = '  ';
const input = '1a';
// const input = '00000-42a1234'; // output = 0

const result = myAtoi(input);
console.log('result', result);