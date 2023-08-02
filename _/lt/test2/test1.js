function getSquare() {

}

function solution(office, k) {
  let max = 0;
  let N = office.length;

  let largestNumber = 0;

  // Y axis
  for (let y=0; y<N-k+1; y++) {
  // for (let y=0; y<3; y++) {
    // console.log(`### i: ${i}`);

    let employees = 0;


    // X axis
    for (let x=0; x<N-k+1; x++) {
    // for (let x=0; x<3; x++) {



      console.log("===========");
      // get inner square
      for (let y2=y; y2<y+k; y2++) {
        for (let x2=x; x2<x+k; x2++) {



          console.log(`y: ${y2}, x: ${x2}, value: ${office[y2][x2]}`);
          employees += office[y2][x2];
        }
      }


      console.log(`### employees: ${employees}`);
      if (largestNumber < employees) largestNumber = employees;
      // array.push(employees);
      employees = 0;


    }


  }

  return largestNumber;
}

// const input = [
//   [1,0,0,0],
//   [0,0,0,1],
//   [0,0,1,0],
//   [0,1,1,0]
// ];
// const result = solution(input, 2); // 3

const input = [
  [1,0,0],
  [0,0,1],
  [1,0,0]
];
const result = solution(input, 2); // 1

console.log(result);