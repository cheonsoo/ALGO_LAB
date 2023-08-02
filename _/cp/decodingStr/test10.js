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

  const extract = (arr) => {

    if (arr.indexOf('[') === -1)
      return arr.join('');

    const stack = [];

    while (arr.length > 0) {
      console.log(`### input: ${arr.join('')}`);

      const current = arr[0];

      // 숫자인 경우 stack 에 담고 계속 continue
      if (Number.isInteger(parseInt(current))) {
        stack.push(arr.shift());
        continue;
      }

      // Bracelet 일 경우
      else if (current === '[') {
        let braceletCnt = 1;
        for (let i=1; i<arr.length; i++) {
          if (arr[i] === '[') {
            braceletCnt++;
            continue;
          } else if (arr[i] === ']') {
            if (braceletCnt === 1) {
              braceletCnt--; // make it 0
              const tmp = arr.splice(0, i + 1);
              tmp.shift(); // [ 제거
              tmp.pop(); // ] 제거
              stack.push(tmp.join(''));
              break;
            } else {
              braceletCnt--;
              continue;
            }
          }
        }
      }

      // 영문자인경우
      else {
        stack.push(arr.shift());
      }
    }

    console.log(stack);

    let str = '';
    while (stack.length > 0) {
      if (Number.isInteger(parseInt(stack[0]))) {
        str += new Array(parseInt(stack[0])).fill(stack[1]).join('');
        stack.splice(0, 2);
      } else {
        str += stack.shift();
      }
    }

    console.log(`### str: ${str}`);

    return extract(str.split(''));
  };

  const result = extract(input.split(''));
  return result;
};

// const input = '1[a]';
// const input = 'aaa';
// const input = '2[abc]3[kk]';
const input = '2[aa]3[b2[c]]'; // aaaabccbccbcc
// const input = 'aaaab2[c]b2[c]b2[c]'; // aaaabccbccbcc
const result = solution(input);
console.log('### result: ', result);
