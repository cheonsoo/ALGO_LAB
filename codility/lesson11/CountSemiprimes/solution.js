/*
Prime Numbers:
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499

Semi Prime Numbers:
4, 6, 9, 10, 14, 15, 21, 22, 25, 26
 */
function solution(N, P, Q) {
  function getDivisors(num) {
    const divisors = [];
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return Array.from(new Set(divisors)).sort((a, b) => a - b);
  }

  function getPrimeNumbers(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
      let isPrime = true;
      for (let k = 2; k < i; k++) {
        if (i % k === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) primes.push(i);
    }

    return primes;
  }

  function getSemiPrimeNumbers(start, end) {
    const primes = getPrimeNumbers(start, end);
    const semiPrimes = [];

    for (let i = start; i <= end; i++) {
      // it's prime number
      if (primes.indexOf(i) > -1) {
        continue;
      } else {
        const divisors = getDivisors(i);
        // it's not the semi prime number
        if (divisors.length >= 3) {
          continue;
        }

        let isSemiPrime = true;
        for (let p = 0; p < divisors.length; p++) {
          if (primes.indexOf(divisors[p]) === -1) {
            isSemiPrime = false;
            break;
          }
        }
        if (isSemiPrime) semiPrimes.push(i);
      }
    }

    return semiPrimes;
  }

  const semiPrimes = getSemiPrimeNumbers(1, N);
  console.log(`### all semiPrimes: ${semiPrimes}`);

  const size = P.length;
  let resultCount = [];
  let result;
  for (let i = 0; i < size; i++) {
    const start = P[i];
    const end = Q[i];

    console.log(`### start: ${start}`);
    console.log(`### end: ${end}`);
    result = [];
    for (let k = 0; k < semiPrimes.length; k++) {
      if (semiPrimes[k] >= start && semiPrimes[k] <= end) {
        result.push(semiPrimes[k]);
      }
    }
    console.log(`### semiPrimes between numbers: ${result.join(', ')}`);
    resultCount.push(result.length);
  }

  return resultCount;
}

const N = 26;
const P = [1, 4, 16];
const Q = [26, 10, 20];
const result = solution(N, P, Q);
console.log(`### result: ${result}`);
