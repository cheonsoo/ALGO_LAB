function solution(A) {
  let count = 0;
  let arr = A;
  while (true) {
    arr = arr.slice(findIndexOfLeast(arr) + 1);
    console.log(arr);
    count++;
    if (!arr.length) break;
  }
  return count;
}

function findIndexOfLeast(arr) {
  let indexOfLeast = 0;
  let least = arr[0];
  for (let i = 1, l = arr.length; i < l; i++) {
    if (arr[i] < least) {
      least = arr[i];
      indexOfLeast = i;
    }
  }
  return indexOfLeast;
}

// const A = [2, 4, 1, 6, 5, 9, 7]; // Result: 3
// const A = [4, 3, 2, 6, 1]; // Result: 1
// const A = [2, 1, 6, 4, 3, 7]; // Result: 3
const A = [2, 1, 6, 4, 3, 7, 8, 9, 13, 12, 11, 10]; // Result: 4

console.log(A);
const result = solution(A);
console.log(`##### result: ${result}`);
