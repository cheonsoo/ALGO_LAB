function solution(A) {
  let count = 0;

  while (true) {
    let least = A[0];
    let leastIdx = 0;
    for (let a = 1; a < A.length; a++) {
      if (least > A[a]) {
        least = A[a];
        leastIdx = a;
      }
    }

    A = A.slice(leastIdx + 1);
    count++;

    if (A.length === 0) break;
  }

  return count;
}

// const A = [2, 4, 1, 6, 5, 9, 7]; // Result: 3
// const A = [4, 3, 2, 6, 1]; // Result: 1
// const A = [2, 1, 6, 4, 3, 7]; // Result: 3
const A = [2, 1, 6, 4, 3, 7, 8, 9, 13, 12, 11, 10]; // Result: 4

console.log(A.join(', '));
const result = solution(A);
console.log(`##### result: ${result}`);
