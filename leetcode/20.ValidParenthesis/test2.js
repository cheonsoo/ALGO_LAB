/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i=0; i<s.length; i++) {
    const current = s[i];

    if (current === '(') {
      stack.push(current);
    } else {
      if (stack[stack.length - 1] === '(')
        stack.pop();
      else
        return false;
    }
  }

  if (stack.length === 0)
    return true;
  else
    return false;
};


const s = "())"; // true

console.log('### result: ', isValid(s));
