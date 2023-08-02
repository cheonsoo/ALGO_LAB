// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  let good = '.';
  let bad = 'X';
  let result = 0;

  let potholeCount = 0;
  let patchCount = 3;
  for (let i = 0; i < S.length; i++) {
    let current = S.charAt(i);
    if (current === good) {
      patchCount--;
    } else {
      potholeCount++;
      if (potholeCount > 0 && patchCount === 0) {
        result++;
      }
    }
  }

  return result;
}
