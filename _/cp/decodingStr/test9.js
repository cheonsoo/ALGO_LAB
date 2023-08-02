/*
2[abc]3[kk] => abcabckkkkkk
2[aa]3[b2[c]] => bccbccbccbcc

###
2
[aa]
3
[b2[c]]
=>
[aa][aa][b2[c]][b2][c][b2[c]]
=>
aaaab2[c]b2[c]b2[c]
=>
aaaabccbccbcc
*/
const solution = input => {
  console.log('### input: ', input);

  if (input.indexOf('[') === -1) return input;

  const stack = [];

  while (input) {
    // 첫번째 문자 추출
    const current = input[0];
    input = input.substr(1);

    // 현재 문자가 숫자일 때
    if (!isNaN(current)) {
      stack.push(current);

      let startIdx = 0, endIdx = 0, startTimes = 0;
      for (let k = 0; k < input.length; k++) {
        if (input[k] === '[') {
          if (startTimes === 0) startIdx = k;
          startTimes++;
        }
        if (input[k] === ']') {
          startTimes--;

          if (startTimes === 0) {
            endIdx = k;

            stack.push(input.substr(startIdx, endIdx + 1));
            input = input.substr(0, startIdx) + input.substr(endIdx + 1);
            startIdx = 0;
            endIdx = 0;
            break;
          }
        }
      }

    // 현재 문자가 문자일 때
    } else {
      if (stack.length === 0) {
        stack.push(current);
      } else {
        if (stack[stack.length - 1].indexOf('[') === -1) {
          let last = stack.pop();
          last += current;
          // last = last ? last + current : current;
          stack.push(last);
        } else {
          stack.push(current);
        }
      }
    }
  }

  console.log(stack);

  // Stack 에 쌓인 값들을 문자열로 재조합
  let str = '';
  while (stack.length > 0) {
    // 숫자 추출
    if (Number.isInteger(parseInt(stack[0]))) {
      const times = stack.shift();
      str += stack[0].replace('[', '').replace(']', '').repeat(times); // 첫번째 [ 와 마지막 ] 를 제거. replace 해서 앞쪽의 ] 를 제거하더라도 결과는 독같음

      // 문자열일 경우 문자열에 바로 더함
    } else {
      str += stack[0];
    }

    stack.shift();
  }

  console.log(str);

  // Bracket 에 다 없어질 때까지 재귀
  return solution(str);
};

// const input = '1[a]';
// const input = 'aaa';
// const input = '2[abc]3[kk]';
const input = '2[aa]3[b2[c]]'; // aaaabccbccbcc
// const input = 'aaaab2[c]b2[c]b2[c]'; // aaaabccbccbcc
const result = solution(input);
console.log('### result: ', result);
