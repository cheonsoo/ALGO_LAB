/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  let result = 0;
  let idx = 0;
  while(s) {
      let current = s.charAt(idx);
      if (current === '(') {
          let slice = '';
          for (let i=idx+1; i<s.length; i++) {
              if (s.charAt(i) === ')') {
                  s = s.substr(i); // rest
                  slice = s.substr(0, i); // slice
                  result += 2;
                  break;
              }
          }
          
          if (slice.length > 2) {
              result += longestValidParentheses(slice);
          }
      } else {
          s = s.substr(1);
      }
  }
  return result;
};