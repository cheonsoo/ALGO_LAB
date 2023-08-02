const trimParentheses = (s) => {
  while (s.charAt(0) === ')') {
    if (s.charAt(0) === ')') {
      s = s.substr(1);
    }
  }

  while (s.charAt(s.length - 1) === '(') {
    if (s.charAt(s.length - 1) === '(') {
      s = s.substr(0, s.length - 1);
    }
  }

  return s;
};

var longestValidParentheses = function(s) {

  s = trimParentheses(s);
  console.log(s);

  const stack = [];
  for (let i=0; i<s.length; i++) {
      if (s.charAt(i) === '(') {
          stack[i] = '(';
      }
  }

  let idx = 0;
  for (let i=s.length-1; i>=0; i--) {
      if (s.charAt(i) === ')') {
          stack[idx] = stack[idx] ? stack[idx] + ')' : ')';
          // stack[stack.length - 1 - idx] = stack[stack.length - 1 - idx] ? stack[stack.length - 1 - idx] + ')' : ')';
      }
      idx++;
  }
  
  console.log(stack);
  let result = 0;
  for (let i=stack.length-1; i>=0; i--) {
    if (!stack[i])
      continue;

    if (stack[i].length !== 2) {
      break;
    }
    result += 2;
  }

  return result;
};

// const input = '(()'; // 2
// const input = '()'; // 2
// const input = '()()'; // 4
// const input = '()()('; // 4
// const input = ')))()()('; // 4
const input = '()())'; // 4
// const input = '(())'; // 4
// const input = ')())()'; // 2
// const input = '()(())'; // 6
// const input = '()(()'; // 2
// const input = '()(()(()'; // 2
// const input = '))))(((((('; // 0
// const input = '((())))))'; // 0
const result = longestValidParentheses(input);
console.log('result', result);
