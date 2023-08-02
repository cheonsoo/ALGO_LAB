const romans = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const arr = [];
  let split = '';
  do {
    for (let i=0; i<s.length; i++) {
      if (romans.indexOf(s.charAt(i)) >= 0) {
        split = s.substr(0, i+1);
        arr.push(split)
        s = s.replace(split, '');
        break;
      }
    }
  } while(split);

  console.log(arr);
};

// const input = 'LVIII';
const input = 'MCMXCIV';
const result = romanToInt(input);
// console.log('result: ', result);
