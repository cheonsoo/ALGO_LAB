const isNum = (letter, num) => {
  if ((letter != ' ' && !isNaN(letter)) || letter === '-' || letter === '+') {
    if (num && (letter === '-' || letter === '+'))
      return false;
    return true;
  } else {
    return false;
  }
};

var myAtoi = function(s) {
  s = s.trim();
  if (s.length === 0)
    return 0;
  if (s.length === 1)
    return (!isNaN(s)) ? parseInt(s) : 0;
  if (!isNum(s.charAt(0), ''))
    return 0;
  if (['--', '++', '-+', '+-'].indexOf(s.charAt(0) + s.charAt(1)) >= 0)
    return 0;

  let num = '';
  const regexp = new RegExp(/[-0-9]/, 'gi');
  let isNegative = false;
  for (let i=0; i<s.length; i++) {
      const letter = s.charAt(i);
      // console.log(`${letter}`);

      if (isNum(letter, num)) {
          if (letter === '-') {
            isNegative = true;
          } else {
            num += letter;
          }

          const nextLetter = s.charAt(i+1);
          if (!isNum(nextLetter, num))
              break;
      }
  }

  // console.log(`num: ${num}`);
  num = !isNaN(num) ? (parseInt(isNegative ? num * -1 : num)) : 0;
  if (num >= 2**31)
    return 2**31 -1;
  if (num <= -(2**31))
    return -(2**31);

  return num;
};

// const input = '42'; // 42
// const input = '-42'; // -42
// const input = '4193 with words'; // 4193
// const input = 'words and 987'; // 0
// const input = '-91283472332'; // output = -2147483648
// const input = '-+12'; // output = 0
// const input = '+1'; // 1
// const input = '+'; // 0
// const input = ' '; // 0
// const input = '  '; // 0
// const input = '1a'; // 1
// const input = '00000-42a1234'; // output = 0
// const input = '  -0 451';
// const input = ''; // 0
// const input = '  +  413'; // 0
const input = '  --2'; // 0

const result = myAtoi(input);
console.log('result', result);