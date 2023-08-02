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
  const lettersMap = ojbFromStr(S);
  for (let i = 0; i < L.length; i++) {
    const current = L[i];

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
      /*
      B: 4
      I: 3
      L: 6
      O: 3

      B: 1
      I: 1
      L: 2
      */

      const lettersMapTmp = JSON.parse(JSON.stringify(lettersMap));
      const wordMap = ojbFromStr(current);
      console.log(wordMap);
      let count = 0;
      let minLetterCnt = 0;
      for (let letter in wordMap) {
        let cnt = parseInt(lettersMap[letter] / wordMap[letter]);
        if (!minLetterCnt) {
          minLetterCnt = cnt;
        } else if (minLetterCnt > cnt) {
          minLetterCnt = cnt;
        }
      }
      result.push(minLetterCnt);
    }
  }

  console.log(lettersMap);
  console.log(result);

  return result.length > 0 ? result.sort((a, b) => b - a)[0] : 0;
}

const S = 'BILLOBILLOLLOBBI';
const L = ['BILL', 'BOB'];
const result = solution(S, L);
console.log('result: ', result);
