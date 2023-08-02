var longestValidParentheses = function(s) {
  const LEFT = '(';
  const RIGHT = ')';

  // str 시작부터 모든 연속된 ) 제거. ) 로 시작한다면 옳바른 괄호가 나올 수 없다.
  s = s.slice(s.indexOf(LEFT));

  // str 의 길이가 0일 경우 0 리턴
  if (s.length === 0)
      return 0;

  // s Loop
  let count = 0;
  let prevSLength = s.length;
  let currentSLength = 0;
  while(s) {
      // LEFT 가 없으면 break
      if (s.indexOf(LEFT) === -1)
          break;

      // s+1 Loop
      for(let i=0; i<s.length - 1; i++) {
          // ( 와 ) 가 연속으로 나오면 추출 후 Loop Break
          if (s.charAt(i) === LEFT && s.charAt(i + 1) === RIGHT) {
              s = s.replace("()", "");
              count = count + 2;
              break;
          }
      }

      if (prevSLength === s.length)
        break;

      prevSLength = s.length;
  }

  return count;
};


// const input = ')))()()('; // 4
// const input = '()())'; // 4
// const input = '(())'; // 4
// const input = ')())()'; // 2
// const input = '()(())'; // 6
// const input = '()(()'; // 2
// const input = '()(()(()'; // 2
// const input = '))))(((((('; // 0
const input = '((())))))'; // 6
const result = longestValidParentheses(input);
console.log('result', result);