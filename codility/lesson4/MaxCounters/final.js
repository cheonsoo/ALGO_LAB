/**
 * Total Score: 100%
 */
function solution(N, A) {
  let maxCounter = 0;
  let lastCalledMaxCounter = 0;
  let counterArr = [];
  for (let i = 0; i < N; i++) {
    counterArr.push(0);
  }

  function setMaxCounter(num) {
    if (num > maxCounter) maxCounter = num;
  }

  function maxCounterAll() {
    for (let i = 0; i < counterArr.length; i++) {
      if (counterArr[i] < lastCalledMaxCounter) {
        counterArr[i] = lastCalledMaxCounter;
      }
    }
  }

  for (let k = 0; k < A.length; k++) {
    if (A[k] >= 1 && A[k] <= N) {
      if (counterArr[A[k] - 1] > lastCalledMaxCounter) {
        counterArr[A[k] - 1]++;
      } else {
        counterArr[A[k] - 1] = lastCalledMaxCounter + 1;
      }
      setMaxCounter(counterArr[A[k] - 1]);
    } else if (A[k] === N + 1) {
      lastCalledMaxCounter = maxCounter;
    }
  }

  maxCounterAll();

  return counterArr;
}
