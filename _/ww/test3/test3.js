const start = new Date().getTime();
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  A.sort((a, b) => a - b);

  let result = -1;
  for (let i = A.length - 1; i >= 0; i--) {
    const current = A[i];
    if (A.indexOf(current * -1) !== -1) {
      result = current;
      break;
    }
  }

  if (result === -1) return 0;

  return result;
}

// const A = [1,2,3,4,5,6,7,8,9];
// const A = [-1,-2,-3,-4,-5,1,2,3,4,5];
// const A = [-1,-2,-3,-4,-5,1,2,3];
const A = [-1,-2,-3,-4,-5,1,2,3,2,7,6,8,11,-11,-12,12,-13];
// const A = [3,2,-2,5,-3];
// const A = [1,1,2,-1,2,-1];
// const A = [1,2,3,-4];
const result = solution(A);
console.log(`### result: ${result}`);
console.log(`### exe time: ${new Date().getTime() - start}`);