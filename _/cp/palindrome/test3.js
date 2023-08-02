const solution = input => {
  if (input.length === 1) return true;

  for (let i=0; i<input.length; i++) {
    if (input.charAt(i) !== input.charAt(input.length - i - 1)) {
      return false;
    }
  }

  return true;
};

// const input = 'a';
const input = 'aaaaaaaaaaaaaaa';
// const input = 'abcbaa';
// const input = 'abccba';
// const input = 'abcdcba';
const result = solution(input);
console.log('result', result);
