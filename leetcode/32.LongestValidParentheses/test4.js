var longestValidParentheses = function(s) {
    let result = 0;
    let idx = 0;
    while(s && s.length > 1) {
      let slice = '';
      if (s.charAt(idx) === '(') {
        let cutIdx = -1;
        for (let i=idx+1; i<s.length; i++) {
          if (s.charAt(i) === '(') {
            idx = i;
            continue;
          } else {
            cutIdx = i + 1;
            break;
          }
        }

        slice = s.substring(idx, cutIdx);
        s = s.replace(slice, ''); // remove first slice

        if (slice.length >= 2)
          result += 2;
        idx = 0;
      } else {
        s = s.substr(1);
        result = 0;
      }
    }

    return result;
};

// const input = '(()'; // 2
// const input = '()'; // 2
// const input = '()()'; // 4
// const input = '(())'; // 4
// const input = ')())()'; // 2
// const input = '()(())'; // 6
const input = '()(()'; // 2
const result = longestValidParentheses(input);
console.log('result', result);
