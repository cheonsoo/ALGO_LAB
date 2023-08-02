/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};
const dfs = (index = 0, current = '', combinations = [], result = []) => {
  if (index === combinations.length) {
    return result.push(current);
  }

  let letters = combinations[index];
  for (let letter of letters) {
    dfs(index + 1, current + letter, combinations, result);
  }
};

var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  if (digits.length === 1) return map[`${digits}`];

  let arr = [];
  for (let i=0; i<digits.length; i++) {
    arr.push(map[digits.charAt(i)]);
  }

  const result = [];
  dfs(0, '', arr, result);

  return result;
};

const digits = '2';
// const digits = '23';
// const digits = '234';
const result = letterCombinations(digits);
console.log('result', result);
