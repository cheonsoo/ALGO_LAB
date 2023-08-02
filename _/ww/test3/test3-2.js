// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  A.sort((a, b) => a - b); // Sort the array in ASC order

  let result = -1; // Init value
  for (let i = A.length - 1; i >= 0; i--) {
    // Loop from the last
    const current = A[i];

    // Check if current number has it's the opposite number.
    // If it has. break the loop cuz it's looping from the biggest
    if (A.indexOf(current * -1) !== -1) {
      result = current;
      break;
    }
  }

  if (result === -1)
    // Case there is no matched number
    return 0;

  return result;
}
