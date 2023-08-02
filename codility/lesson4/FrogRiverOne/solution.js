// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  if (A.length === 1) {
    if (A[0] === X) return 0;
    else return -1;
  }

  const allPositionsAdded = ((X + 1) * X) / 2;
  console.log(allPositionsAdded);

  let result = -1;
  // const memo = [];
  let sum = 0;
  const previous = -1;
  const memo = [];
  debugger;
  for (let i = 0; i < A.length; i++) {
    if (allPositionsAdded === sum) {
      result = i - 1;
      break;
    }

    if (memo.findIndex(item => item === A[i]) === -1) {
      sum += A[i];
      memo.push(A[i]);
    }
  }

  return result;
}

const X = 5;
const A = [1, 3, 1, 4, 2, 3, 5, 4];

const result = solution(X, A);
console.log(result);
