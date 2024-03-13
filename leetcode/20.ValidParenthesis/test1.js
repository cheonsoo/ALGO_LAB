/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const kind = ['(', '{', '['];
  const brackets = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  const stack = [];

  for (let i=0; i<s.length; i++) {
      const current = s[i];
      console.log(stack);
      if (kind.indexOf(current) !== -1) {
          stack.push(current);
      } else {
          if (brackets[current] === stack[stack.length - 1]) {
              stack.pop();
          } else {
              return false;
          }
      }
  }

  if (stack.length === 0)
      return true;
  else
      return false;
};


// const s = "()"; // true
// const s = "()[]{}"; // true
// const s = "(]"; // false
const s = "(()))"; // false
// const s = "(()())"; // false

console.log('### result: ', isValid(s));
