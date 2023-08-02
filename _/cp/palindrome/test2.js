const solution = input => {
  if (input === input.split('').reverse().join('')) {
    return true;
  }

  let flg = false;
  for (let i = 0; i < input.length; i++) {
    const tmp = input.substr(0, i) + input.substr(i + 1);
    if (tmp === tmp.split('').reverse().join('')) {
      flg = true;
      break;
    }
  }

  return flg;
};

const input = 'abcbaa';
const result = solution(input);
console.log('result', result);
