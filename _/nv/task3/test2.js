function solution(A) {
  let arr = A;
  let arrs = [];

  while (true) {
    let minIdx = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIdx = i;
      }
    }

    let first = arr.slice(0, minIdx + 1);
    let second = arr.slice(minIdx + 1);
    arrs.push(first);
    arr = second;
    console.log(JSON.stringify(arrs));

    if (!arr.length) break;
  }

  return arrs;
}

// const A = [2, 4, 1, 6, 5, 9, 7]; // Result: 3
// const A = [4, 3, 2, 6, 1]; // Result: 1
// const A = [2, 1, 6, 4, 3, 7]; // Result: 3
const A = [2, 1, 6, 4, 3, 7, 8, 9, 13, 12, 11, 10]; // Result: 4

console.log(A);
const result = solution(A);
console.log(`##### result: ${result.length}`);
