function solution(A) {
  // Single Array
  if (A.length === 1) {
    if (A[0] > 0) {
      if (A[0] > 1) return 1;
      else return ++A[0];
    } else {
      return 1;
    }
  }

  const sorted = A.filter(item => item > 0).sort((a, b) => a - b);

  let missing = 0;

  if (sorted.length === 0) return 1;

  sorted.unshift(0);
  console.log(sorted);

  function getMissing(current, next) {
    let missing = 0;
    if (current < 0 && next < 0) {
      missing = 1;
    } else if (current < 0 && next > 0) {
      if (next === 1) {
        missing = 2;
      } else {
        missing = 1;
      }
    } else if (current > 0 && next > 0) {
      missing = ++current;
    }
    return missing;
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    let current = sorted[i];
    let next = sorted[i + 1];

    if (next - current > 1) {
      missing = ++current;
    }

    if (missing > 0) break;
  }

  // All Filled
  if (missing === 0) {
    missing = ++sorted[sorted.length - 1];
  }

  return missing;
}

// const A = [-1, -2, -4]; // Result: 1
// const A = [-1, -3]; // Result: 1
// const A = [-2, -3, 4]; // Result: 1
// const A = [1, 2, 3]; // Result: 4
// const A = [1, 3, 6, 4, 1, 2]; // Result: 5
// const A = [-1]; // Result: 1
// const A = [-1, -1]; // Result: 3
// const A = [2, 1]; // Result: 3
// const A = [-2]; // Result: 1
// const A = [2]; // Result: 1
// const A = [2, 3]; // Result: 1
// const A = [4, 6, 7]; // Result: 1
// const A = [-2, -1, 6, 3]; // Result: 1
const A = [-2, -1, 2, 1]; // Result: 1
const result = solution(A);
console.log(`### result: ${result}`); // 5
