function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result;
  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    const str = S.replace(/\?/g, char);

    if (str === str.split('').reverse().join('')) {
      result = str;
      break;
    }
  }

  console.log('### result: ', result);
  return result ? result : 'NO';
}

const S = '?ab??a';
const result = solution(S);
console.log('result: ', result);
