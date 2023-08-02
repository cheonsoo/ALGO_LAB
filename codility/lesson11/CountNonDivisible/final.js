/**
 * Total Score: 66
 * Detected time complexity: O(N ** 2)
 */
function solution(A) {
  const nonDivisors = [];
  for (let i = 0; i < A.length; i++) {
    const current = A[i];

    let cnt = 0;
    for (let k = 0; k < A.length; k++) {
      const compare = A[k];
      if (current !== compare && current % compare !== 0) ++cnt;
    }
    nonDivisors.push(cnt);
  }

  return nonDivisors;
}
