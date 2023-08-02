var longestValidParentheses = function(s) {
  if(s.length === 0) return 0;

  let stack = [-1];
  let max = 0;

  for(let i = 0; i < s.length; i++) {
      //push into stack if opening paran
      if(s[i] === '(') {
          stack.push(i);
      } else {
          // pop out if it's an closing paran
          stack.pop();

          // if we don't hav anything in stack, push this new index
          if(stack.length === 0) {
              stack.push(i);
          } else {
              // i - stack[stack.length - 1] is length of longest substr
              max = Math.max(max, i - stack[stack.length - 1]);
          }
      }
  }
  return max;
};

// const input = '()'; // 2
// const input = ')))()()('; // 4
// const input = '()())'; // 4
// const input = '(())'; // 4
// const input = ')))(())'; // 4
// const input = '))((())('; // 4
// const input = ')())()'; // 2
const input = '()(())'; // 6
// const input = '()(()'; // 2
// const input = '()(()(()'; // 2
// const input = '))))(((((('; // 0
// const input = '((())))))'; // 6
const result = longestValidParentheses(input);
console.log('result', result);
