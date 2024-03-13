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

  // ( 만 남았을 경우 false, stack 이 없을 경우 true
  return stack.length === 0 ? true : false;
}

function removeInvalidParentheses(s) {

  function bfs(arr) {
    if (arr.length === 0) {
      return;
    } else if (arr.length > 1) {
      cases.push(arr.join(''));
    }

    for (let i=0; i<arr.length; i++) {
      bfs(arr.filter((item, idx) => idx !== i));
    }
  }

  let cases = [];
  bfs(s.split(''));

  cases = Array.from(new Set(cases)).filter(item => isValidParentheses(item));
  cases.sort((a, b) => b.length - a.length);
  const longestParenthesesLength = cases[0].length;
  console.log(cases);

  return cases.filter(item => item.length === longestParenthesesLength);
}


// const input = "())"; // true
const input = '()())()';
console.log('### result: ', removeInvalidParentheses(input));
