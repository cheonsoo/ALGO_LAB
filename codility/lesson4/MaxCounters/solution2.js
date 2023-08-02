/**
 * Total Score: 77
 */
function solution(N, A) {
  let maxCounter = 0;
  let counterArr = [];
  for (let i = 0; i < N; i++) {
    counterArr.push(0);
  }
  console.log(counterArr);

  function setMaxCounter(num) {
    if (num > maxCounter) maxCounter = num;
  }

  function maxCounterAll() {
    for (let i = 0; i < counterArr.length; i++) {
      counterArr[i] = maxCounter;
    }
  }

  for (let k = 0; k < A.length; k++) {
    if (A[k] >= 1 && A[k] <= N) {
      counterArr[A[k] - 1]++;
      setMaxCounter(counterArr[A[k] - 1]);
    } else if (A[k] === N + 1) {
      maxCounterAll();
    }

    console.log(`${k}: ${counterArr}`);
    console.log(`maxCounter: ${maxCounter}`);
  }

  return counterArr;
}

const N = 5;
const A = [3, 4, 4, 6, 1, 4, 4];
// Result: [3, 2, 2, 4, 2]
const result = solution(N, A);
console.log(`### result: ${result}`);
