/**
 * 2[abc]3[kk] => abcabckkkkkk
 * 2[aa]3[b2[c]] => aaaabccbccbcc
 */

const extract = (stack = [], input = "") => {};

const solution = input => {
  const stack = [];

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

  console.log(stack);

  return "";
};

// const input = '2[abc]3[kk]'; // abcabckkkkkk
const input = '2[aa]3[b2[c]]'; // aaaabccbccbcc
// const input = '3[b2[c]]'; // bccbccbcc
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