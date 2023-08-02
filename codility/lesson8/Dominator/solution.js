/**
 * Total Score: 83
 *
 * Detected time complexity:
 * O(N*log(N)) or O(N) or O(N**2)
 */
function solution(A) {
  const setOfArr = new Set(A);
  const arrFromSet = Array.from(setOfArr);
  console.log(arrFromSet);

  // let dominatorExists = true;
  let dominator = -1;
  let sizeOfDominator = -1;
  for (let i = 0; i < arrFromSet.length; i++) {
    const item = arrFromSet[i];

    const numOfItem = A.filter(num => num === item).length;

    if (numOfItem > A.length / 2) {
      dominator = item;
      sizeOfDominator = numOfItem;
      // dominatorExists = true;
      break;
    }

    // if (numOfItem > sizeOfDominator) {
    //   dominator = item;
    //   sizeOfDominator = numOfItem;
    //   dominatorExists = true;
    // } else if (numOfItem === sizeOfDominator) dominatorExists = false;
  }

  if (dominator === -1) return -1;

  let posOfDominator = -1;
  console.log(`### dominator: ${dominator}`);
  console.log(`### size of dominator: ${sizeOfDominator}`);
  console.log(A);
  for (let i = 0; i < A.length; i++) {
    if (A[i] === dominator) {
      posOfDominator = i;
      break;
    }
  }

  return posOfDominator;
}

// const A = [3, 4, 3, 2, 3, -1, 3, 3];
// const A = [3, 4, 4, 4, 4, 4, 3, 2, 3, -1, 3, 3];
// const A = [0, 0, 0, 1, 1, 1];
// const A = [0, 0, 1, 1, 1];
// const A = [1, 2, 3, 4, 5];
const A = [2, 1, 1, 3];

const result = solution(A);
console.log(`### result: ${result}`);
