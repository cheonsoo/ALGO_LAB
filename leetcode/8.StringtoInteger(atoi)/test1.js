/**
 * @param {string} s
 * @return {number}
 */

const isNum = (letter) => {
  if ((letter && !isNaN(letter)) || letter === '-')
    return true;
  else
    return false;
};

var myAtoi = function(s) {
  const regexp = new RegExp(/[-0-9]/, 'gi');
  let num = '';
  for (let i=0; i<s.length; i++) {
      const letter = s.charAt(i);
      // console.log(`${letter}: ${regexp.test(letter)}`);

      if (isNum(letter)) {
          num += letter;
          // console.log(num);

          const nextLetter = s.charAt(i+1);
          if (!isNum(nextLetter))
              break;
      }
  }

  console.log(num);

  return parseInt(num);
};

// const input = '42';
// const input = '-42';
const input = '4193 with words';
const result = myAtoi(input);
console.log('result', result);