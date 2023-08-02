function solution(office, k) {
  let max = 0;
  let N = office.length;

  let largestNumber = 0; // largest number of getting warm employees in a square
  let employees = 0; // number of employees in each square

  // Y axis of office
  for (let y=0; y<N-k+1; y++) {

    // X axis of office
    for (let x=0; x<N-k+1; x++) {

      // get inner square, x & y axis to the size of k x k
      for (let y2=y; y2<y+k; y2++) {
        for (let x2=x; x2<x+k; x2++) {
          employees += office[y2][x2];
        }
      }

      // replace larger number of emplyees
      if (largestNumber < employees) largestNumber = employees;

      // init to re-use emplyees
      employees = 0;
    }
  }

  return largestNumber;
}

const input = [
  [1,0,0,0],
  [0,0,0,1],
  [0,0,1,0],
  [0,1,1,0]
];
const result = solution(input, 2); // 3

// const input = [
//   [1,0,0],
//   [0,0,1],
//   [1,0,0]
// ];
// const result = solution(input, 2); // 1

console.log(result);