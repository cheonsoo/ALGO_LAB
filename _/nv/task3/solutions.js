function solution(A) {
  let smallest = -1;
  let largest = -1;

  let arrayOfPieces = [];
  let piece = [];

  let previous = 0;
  let totalCounter = 0;
  let sizeOfPiece = 1;
  let largestPrevious = previous;
  let largestNum = 0;
  piece.push(A[0]);

  for (let i = 1; i < A.length; i++) {
    let current = A[i];

    if (current > previous) {
      arrayOfPieces.push(piece);
      piece = [current];
    } else {
      piece.push(current);
    }

    previous = current;

    if (i === A.length - 1) {
      const lastPiece = arrayOfPieces[arrayOfPieces.length - 1];
      const lastNum = lastPiece[lastPiece.length - 1];
      if (lastNum !== current) arrayOfPieces.push(piece);
    }
  }

  return arrayOfPieces;
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
console.log(JSON.stringify(result));
const sorted = sortPieces(result);
console.log(sorted.join(','));
console.log(`##### result: ${result.length}`);
