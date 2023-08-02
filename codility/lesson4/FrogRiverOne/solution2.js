// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  if (A.length === 1) {
    if (A[0] === X) return 0;
    else return -1;
  }

  let result = -1;
  // const memo = [];
  const positions = [];
  for (let i = 0; i < A.length; i++) {
    if (positions.findIndex(item => item === A[i]) === -1) {
      positions.push(A[i]);
    }

    if (positions.length === X) {
      console.log(positions);
      result = i;
      break;
    }
  }

  return result;
}

const X = 5;
const A = [1, 3, 1, 4, 2, 3, 5, 4];

const result = solution(X, A);
console.log(result);
