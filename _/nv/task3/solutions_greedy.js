function solution(A) {
  function getSplitArray(A, res) {
    if (A.length === 0) {
      return res;
    }

    let idx = 0;
    for (let i = 1; i < A.length; i++) {
      if (A[idx] > A[i]) {
        idx = i;
      }
    }
    const arr1 = A.splice(0, idx + 1);
    const arr2 = A;

    res.push(arr1);

    return getSplitArray(arr2, res);
  }

  const splitArray = getSplitArray(A, []);

  console.log(`### splitArray: ${JSON.stringify(splitArray)}`);

  return splitArray;
}

function sortPieces(arrayOfPieces) {
  let sorted = [];
  for (let i = 0; i < arrayOfPieces.length; i++) {
    const piece = arrayOfPieces[i];
    piece.sort((a, b) => a - b);
    sorted = sorted.concat(piece);
  }
  return sorted;
}
// const A = [2, 4, 1, 6, 5, 9, 7]; // Result: 3
// const A = [4, 3, 2, 6, 1]; // Result: 1
// const A = [2, 1, 6, 4, 3, 7]; // Result: 3
const A = [2, 1, 6, 4, 3, 7, 8, 9, 13, 12, 11, 10]; // Result: 4

console.log(A);
const result = solution(A);
console.log(`##### result: ${result.length}`);

const sorted = sortPieces(result);
console.log(sorted);
