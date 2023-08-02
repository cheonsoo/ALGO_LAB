/**
 * Total Score: 100
 */
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
