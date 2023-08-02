const solution = input => {
  if (input === input.split('').reverse().join('')) {
    return true;
  }

  return false;
};

// const input = 'a';
// const input = 'aaaaaaaaaaaaaaa';
// const input = 'abcbaa';
// const input = 'abccba';
const input = 'abcdcba';
const result = solution(input);
console.log('result', result);
