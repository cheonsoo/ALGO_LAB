/*
2[abc]3[kk] => abcabckkkkkk
2[aa]3[b2[c]] => bccbccbccbcc
*/
const solution = input => {
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
    }
  }

  let str = '';
  while (stack.length > 0) {
    if (!isNaN(stack[0])) {
      const times = stack.splice(0, 1);
      str += stack[0].replace('[', '').replace(']', '').repeat(times);
      stack.splice(0, 1);
    } else {
      str += stack[0];
    }
  }

  console.log(str);

  return str;
};

// const input = '2[abc]3[kk]';
const input = '2[aa]3[b2[c]]';
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
