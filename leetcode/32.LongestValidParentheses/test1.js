/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  let idx = 0;
  while(s) {
      let result = 0;
      let current = s.charAt(idx);
      if (current === '(') {
          let isValid = false;
          for (let i=idx+1; i<s.length; i++) {
              if (s.charAt(i) === ')') {
                  isValid = true;
                  s = s.substr(0, i);
                  break;
              }
          }    
      } else {
          s = s.substr(0, 1);
      }
  }
  return 2;
};

const input = '()()';
const result = longestValidParentheses(input);
console.log('result', result);
