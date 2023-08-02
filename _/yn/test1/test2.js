function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result;
  let isOdd = S.length % 2 ? true : false;
  let left = S.substr(0, S.length / 2);
  let right = S.substr(S.length / 2 + (isOdd ? 1 : 0))
    .split('')
    .reverse()
    .join('');

  for (let i = 0; i < left.length; i++) {
    const charLeft = left.charAt(i);
    const charRight = right.charAt(i);
    if (charLeft !== '?' && charRight !== '?' && charLeft !== charRight) {
      result = 'NO';
      break;
    }

    if (charLeft !== '?' && charRight === '?') {
      right = right.replace('?', charLeft);
    } else if (charLeft === '?' && charRight !== '?') {
      left = left.replace('?', charRight);
    } else {
      right = right.replace('?', 'a');
      left = left.replace('?', 'a');
    }
  }

  if (result === 'NO') {
    return result;
  } else {
    if (isOdd) {
      const middleChar = S.charAt(S.length / 2 + 1);
      result = `${left}${middleChar === '?' ? 'a' : middleChar}${right.split('').reverse().join('')}`;
    } else {
      result = `${left}${right.split('').reverse().join('')}`;
    }
  }

  return result;
}

// const S = '?ab??a';
// const S = '?ab???a';
// const S = 'bab??a';
const S = '?a?';
const result = solution(S);
console.log('result: ', result);
