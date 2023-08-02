/*
2[abc]3[kk] => abcabckkkkkk
2[aa]3[b2[c]] => bccbccbccbcc
*/
const solution = input => {
  if (input.indexOf('[') === -1) return input;

  const stack = [];
  while (input) {
    const current = input[0];
    input = input.substr(1);

    if (!isNaN(current)) {
      stack.push(current);

      let startIdx = 0,
        endIdx = 0;
      let startTimes = 0;
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
            console.log(stack);
            input = input.substr(0, startIdx) + input.substr(endIdx + 1);
            console.log(input);
            startIdx = 0;
            endIdx = 0;
            break;
          }
        }
      }
    } else {
      // let last = stack.pop();
      // last = last ? last + current : current;
      // stack.push(last);
      stack.push(current);
    }
  }

  let str = '';
  while (stack.length > 0) {
    if (!isNaN(stack[0])) {
      const times = stack.splice(0, 1);
      str += stack[0].replace('[', '').replace(']', '').repeat(times);
    } else {
      str += stack[0];
    }

    stack.splice(0, 1);
  }

  console.log(str);

  return solution(str);
};

const input = '1[a]';
// const input = 'aaa';
// const input = '2[abc]3[kk]';
// const input = '2[aa]3[b2[c]]'; // aaaabccbccbcc
// const input = 'aaaab2[c]b2[c]b2[c]'; // aaaabccbccbcc
const result = solution(input);
console.log('result: ', result);

/*
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
