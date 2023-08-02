/**
 * 55%
 * Complexity: O(N * log(log(N)) + M * N) or O(M * N**3) or O(M * N ** (3/2))
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
      if (primes.indexOf(i) > -1) {
        continue;
      } else {
        const divisors = getDivisors(i);
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

  const size = P.length;
  let resultCount = [];
  let result;
  for (let i = 0; i < size; i++) {
    const start = P[i];
    const end = Q[i];

    result = [];
    for (let k = 0; k < semiPrimes.length; k++) {
      if (semiPrimes[k] >= start && semiPrimes[k] <= end) {
        result.push(semiPrimes[k]);
      }
    }
    resultCount.push(result.length);
  }

  return resultCount;
}
