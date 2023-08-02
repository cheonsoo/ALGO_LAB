/**
 * 2[abc]3[kk] => abcabckkkkkk
 * 2[aa]3[b2[c]] => aaaabccbccbcc
 */

const extract = (stack = [], input = "", result = "") => {
  if (input === "") {
    return;
  }
  // if (input === "") {
  //   if (stack.length > 0) {
  //     for (let i=0; i<stack.length; i++) {
  //       if (stack[i].indexOf("[") === -1) {
  //         result += stack[i];
  //       } else {
  //         input += stack[i];
  //       }
  //     }
  //     stack = [];
  //   } else {
  //     return;
  //   }
  // }

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

  for (let i=0; i<stack.length; i++) {
    const current = stack[i];

    if (Number.isInteger(parseInt(current))) {

      let str = "";
      for (let k=0; k<parseInt(current); k++) {
        let tmp = stack[i + 1];
        if (tmp.indexOf("[") >= 0)
          tmp = tmp.substring(1, tmp.length - 1);
        str += tmp;
      }
      stack[i] = null;
      stack[i + 1] = str;
    }
  }
  stack = stack.filter(item => item !== null);

  extract(stack, input, result);
};

const solution = input => {
  const stack = [];
  let result = "";

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

/*
2[aa]
3[b2[c]]
->>>
2
aa
3
b2[c]

*/

/*
2
aa
3
b
2
c

---

2
aa
3
b2[c]
aaaab2[c]b2[c]b2[c]
*/