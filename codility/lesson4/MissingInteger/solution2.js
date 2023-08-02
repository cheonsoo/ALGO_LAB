function solution(A) {
  const sorted = A.sort((a, b) => a - b);
  console.log(sorted);

  let missing = 0;

  // All Minus Numbers
  if (sorted[sorted.length - 1] < 0) {
    missing = 1;
    return missing;
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    let current = sorted[i];
    let next = sorted[i + 1];

    if (next - current > 1) {
      missing = ++current;
      break;
    }
  }

  // All Filled
  if (missing === 0) {
    missing = ++A.length;
  }

  return missing;
}

// const A = [-1, -2, -4];
const A = [-1, -3];
// const A = [1, 2, 3];
// const A = [1, 3, 6, 4, 1, 2];
const result = solution(A);
console.log(`### result: ${result}`); // 5
