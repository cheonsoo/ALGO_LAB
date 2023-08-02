// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, R) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === R) return 0;

  let maxTypeCnt = 0;
  for (let i = 0; i < A.length - R + 1; i++) {
    let tmp = JSON.parse(JSON.stringify(A));
    tmp.splice(i, R);
    let cnt = Array.from(new Set(tmp)).length;
    if (maxTypeCnt < cnt) {
      maxTypeCnt = cnt;
    }
  }

  return maxTypeCnt;
}
