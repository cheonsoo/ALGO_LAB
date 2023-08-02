/**
 * 2[abc]3[kk] => abcabckkkkkk
 * 2[aa]3[b2[c]] => aaaabccbccbcc
 */

const extract = (stack = [], input = "", result = []) => {
  if (input === "") {
    return;
  }

  const firstLetter = input.charAt(0);
  stack.push(firstLetter);
  input = input.substr(1);

  let bracketCnt = 0;
  for (let i=0; i<input.length; i++) {
    const current = input.charAt(i);

    if (current === "[") {
      bracketCnt++;
      continue;
    } else if (current === "]") {
      if (bracketCnt === 1) {
        stack.push(input.substr(0, i + 1));
        input = input.substr(i + 1);
        break;
      } else {
        bracketCnt--;
        continue;
      }
    }
  }

  const tmp = [];
  for (let i=0; i<stack.length; i++) {
    const current = stack[i];

    if (Number.isInteger(parseInt(current))) {
      for (let k=0; k<parseInt(current); k++) {
        tmp.push(stack[i + 1].substring(1, stack[i + 1].length - 1));
      }
    }
  }
  stack = stack.filter(item => item !== null);

  if (stack[0].indexOf("[") < 0) {
    result.push(stack.shift());
  }

  extract(stack, input, result);
};

const solution = input => {
  const stack = [];
  const result = [];

  extract(stack, input, result);

  console.log(stack);

  return "";
};

// const input = '2[abc]3[kk]'; // abcabckkkkkk
const input = '2[aa]3[b2[c]]'; // aaaabccbccbcc
// const input = '3[b2[c]]'; // bccbccbcc
// const input = 'aaaa3[bb]'; // aaaabbbbbb
const result = solution(input);
console.log('result: ', result);
