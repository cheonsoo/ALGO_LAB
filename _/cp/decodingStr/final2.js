const flatStack = stack => {
  let str = "";
  while (stack.length > 0) {
    if (Number.isInteger(parseInt(stack[0]))) {
      const times = parseInt(stack.shift());
      str += stack[0].slice(1).slice(0, stack[0].length - 2).repeat(times);
    } else {
      str += stack[0];
    }

    stack.shift();
  }

  return str;
};

const solution = input => {
  if (input.indexOf('[') === -1) return input;

  const stack = [];

  while (input) {
    const current = input.charAt(0);
    input = input.slice(1);

    if (Number.isInteger(parseInt(current))) {
      stack.push(current);

      let bracketCnt = 0;
      for (let i=0; i<input.length; i++) {
        if (input[i] === "[") {
          bracketCnt++;
        } else if (input[i] === "]") {
          bracketCnt--;

          if (bracketCnt === 0) {
            stack.push(input.slice(0, i + 1));
            input = input.slice(i + 1);
            break;
          }
        }
      }
    } else {
      stack.push(current);
    }
  }

  return solution(flatStack(stack));
};

// const input = '3[a]';
// const input = 'aaa';
const input = 'aabbcc';
// const input = '2[abc]3[kk]';
// const input = '2[aa]3[b2[c]]'; // aaaabccbccbcc
// const input = 'aaaab2[c]b2[c]b2[c]'; // aaaabccbccbcc
const result = solution(input);
console.log('### result: ', result);
