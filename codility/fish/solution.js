function solution(A, B) {
  if (new Set(B).size === 1) {
    return A.length;
  }

  const size = A.length - 1;
  const newA = [];
  const newB = [];
  for (let i = 0; i <= size; i++) {
    // debugger;
    if (i === size) {
      newA.push(A[i]);
      newB.push(B[i]);
      break;
    }

    if (B[i] === 1) {
      const moving = A[i];
      const direction = B[i];
      const stay = A[i + 1];

      if (moving > stay) {
        // in order to skip
        A[i + 1] = -1;
        B[i + 1] = -1;
        newA.push(moving);
        newB.push(direction);
      } else {
        // in order to skip
        newA.push(A[i + 1]);
        newB.push(B[i + 1]);
        A[i + 1] = -1;
        B[i + 1] = -1;
      }
    } else {
      if (A[i] !== -1) {
        newA.push(A[i]);
        newB.push(B[i]);
      }
    }
  }

  console.log(newA.filter(item => item > -1));
  console.log(newB.filter(item => item > -1));

  return solution(
    newA.filter(item => item > -1),
    newB.filter(item => item > -1)
  );
}

// const A = [4, 3, 2, 1, 5];
// const B = [0, 1, 0, 0, 0];
const A = [4, 3, 2, 1, 5];
const B = [0, 0, 1, 0, 0];

const result = solution(A, B);
console.log(result);
