const ojbFromStr = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  return obj;
};

function solution(S, L) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = [];
  for (let i = 0; i < L.length; i++) {
    const current = L[i];
    const lettersMap = ojbFromStr(current);
    console.log(lettersMap);

    if (S.length < current.length) {
      result.push(0);
      break;
    } else if (S.length === current.length) {
      if (S.split('').sort() === current.split('').sort()) {
        result.push(1);
        break;
      } else {
        result.push(0);
        break;
      }
    } else {
      let tmp = current;
      let count = 0;
      while (true) {
        for (let a = 0; a < tmp.length; a++) {
          const char = tmp.charAt(a);
          if (tmp.indexOf(char) !== -1) {
            tmp = tmp.replace(char, '');
          } else {
            result.push(count);
            break;
          }
        }
        count++;
      }
    }
  }

  return result.length > 0 ? result.sort((a, b) => a - b)[0] : 0;
}

const S = 'BILLOBILLOLLOBBI';
const L = ['BILL', 'BOB'];
const result = solution(S, L);
console.log('result: ', result);
