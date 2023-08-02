// ### Task 1
function solution(A) {
  // Case 1: Flipping second coin first
  function flipCase1(A) {
    let counter = 0;
    let previous = A[0];

    for (let i = 1; i < A.length; i++) {
      let current = A[i];
      if (previous === current) {
        ++counter;
        if (current === 1) previous = 0;
        else previous = 1;
      } else {
        previous = current;
      }
    }

    return counter;
  }

  // Case 2: Flipping first coin first
  function flipCase2(A) {
    let counter = 1;
    let previous = A[0] === 1 ? 0 : 1;

    for (let i = 1; i < A.length; i++) {
      let current = A[i];
      if (previous === current) {
        ++counter;
        if (current === 1) previous = 0;
        else previous = 1;
      } else {
        previous = current;
      }
    }

    return counter;
  }

  let counter = flipCase1(A);

  // A case that it doesn't need to be flipped
  if (counter === 0) {
    return 0;
  }

  let counter2 = flipCase2(A);

  console.log(A);
  console.log(`### counter: ${counter}`);
  console.log(`### counter2: ${counter2}`);
  let result = 0;
  if (counter < counter2) result = counter;
  else result = counter2;

  return result;
}

const A = [1, 0, 1, 0, 1, 1]; // Result: 1
// const A = [1, 1, 0, 1, 1]; // Result: 2
// const A = [0, 1, 0]; // Result: 0
// const A = [0, 1, 1, 0]; // Result: 2

const result = solution(A);
console.log(`### result: ${result}`);
