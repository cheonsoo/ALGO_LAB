function isValidParentheses(s) {
  const stack = [];

  for (let i=0; i<s.length; i++) {
    if (s.charAt(i) === '(') {
      stack.push('(');
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        // ( 가 아직 남았는데 ( 가 더상 없을 경우 false
        return false;
      }
    }
  }

  console.log(stack);

  // ( 만 남았을 경우 false, stack 이 없을 경우 true
  return stack.length === 0 ? true : false;
}

/*
*/
const input = "(()()())"; // true
console.log(`result: `, isValidParentheses(input));

// export default isValidParentheses;
export { isValidParentheses };