/**
 * Total Score: 83
 *
 * Detected time complexity:
 * O(N*log(N)) or O(N) or O(N**2)
 */
function solution(A) {
  const setOfArr = new Set(A);
  const arrFromSet = Array.from(setOfArr);

  let dominator = -1;
  let sizeOfDominator = -1;
  for (let i = 0; i < arrFromSet.length; i++) {
    const item = arrFromSet[i];

    const numOfItem = A.filter(num => num === item).length;

    if (numOfItem > A.length / 2) {
      dominator = item;
      sizeOfDominator = numOfItem;
      break;
    }
  }

  if (dominator === -1) return -1;

  let posOfDominator = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === dominator) {
      posOfDominator = i;
      break;
    }
  }

  return posOfDominator;
}
