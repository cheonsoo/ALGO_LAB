/**
 * Total Score: 66
 * Detected time complexity: O(N ** 2)
 */
function solution(A) {
  const nonDivisors = [];
  const memo = {};
  for (let i = 0; i < A.length; i++) {
    const current = A[i];
    if (memo[`${current}`]) {
      nonDivisors.push(memo[`${current}`]);
      continue;
    }

    let cnt = 0;
    for (let k = 0; k < A.length; k++) {
      const compare = A[k];
      if (current !== compare && current % compare !== 0) ++cnt;
    }
    nonDivisors.push(cnt);
    memo[`${current}`] = cnt;
  }

  return nonDivisors;
}

// const A = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// const A = [6, 6, 6, 6, 6, 6, 6, 1, 2, 3, 7, 13];
// const A = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 2, 3, 6];
const A = [3, 1, 2, 3, 6];
// const A = [1, 3, 5, 7, 13, 17, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]; // Prime Numbers
const result = solution(A);

const start = new Date().getTime();
console.log(`### length of array: ${A.length}`);
console.log(`### result: ${result}`);
console.log(`### exe time: ${new Date().getTime() - start}`);
