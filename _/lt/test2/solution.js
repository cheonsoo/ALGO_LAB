/*
 * start position, square size
 * Big O: O(N^2)
 */
function getSquare(starter, size) {
  let location = [];
  let xStart = starter[0];
  let yStart = starter[1];

  // Y
  for (let y=yStart; y<yStart + size; y++) {
    // X
    for (let x=xStart; x<xStart + size; x++) {
      // console.log(`[x, y]: [${x}, ${y}]`);
      location.push([x, y]);
    }
  }

  return location;
}

// Big O: O(N)
function getWarmEmployees(office, location) {
  let warmEmployees = 0;
  for (let i = 0; i<location.length; i++) {
    let x = location[i][0];
    let y = location[i][1];
    warmEmployees += office[x][y];
  }
  return warmEmployees;
}

/*
 * Big O: O(N^4) = N X N X (N^2 + N) = N^4 + N^3
 */
function solution(office, k) {
  let max = 0;
  let N = office.length;

  let largestNumber = 0; // largest number of getting warm employees in a square

  // Y axis of office
  for (let y=0; y<N-k+1; y++) {

    // X axis of office
    for (let x=0; x<N-k+1; x++) {

      // get inner square, x & y axis to the size of k x k
      let location = getSquare([x, y], k); // start position, square size

      // get getting warm employees
      let warmEmployees = getWarmEmployees(office, location);

      // replace larger number of emplyees
      if (largestNumber < warmEmployees) largestNumber = warmEmployees;
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
console.log(`### result: ${result}`);
