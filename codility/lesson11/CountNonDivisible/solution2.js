/**
 * Total Score: 55
 * Detected time complexity: O(N ** 2)
 */
const start = new Date().getTime();

function solution(A) {
  function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    divisors.push(num);
    return divisors;
  }

  function getNonDivisors(num, divisors) {
    const divisorsInStr = `@${divisors.join('@')}@`;
    // console.log(divisorsInStr);
    const nonDivisors = [];
    for (let i = 0; i < A.length; i++) {
      const n = A[i];
      if (n !== num && n !== 1) {
        if (divisorsInStr.indexOf(`@${n}@`) === -1) {
          nonDivisors.push(n);
        }
      }
    }

    return nonDivisors;
  }

  const result = [];
  for (let i = 0; i < A.length; i++) {
    const current = A[i];

    const divisors = getDivisors(current);
    const nonDivisors = getNonDivisors(current, divisors);
    result.push(nonDivisors.length);
  }

  return result;
}

const A = [1, 3, 5, 7, 13, 17, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// const A = [3, 1, 2, 3, 6];
const result = solution(A);

console.log(`### length of array: ${A.length}`);
console.log(`### result: ${result}`);
console.log(`### exe time: ${new Date().getTime() - start}`);
