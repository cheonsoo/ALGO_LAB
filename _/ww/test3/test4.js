const start = new Date().getTime();
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // 배열을 역순으로 정렬
  A.sort((a, b) => b - a);

  // 배열의 첫번째값이 음수면 return 0
  if (A[0] < 0)
    return 0;

  // 배열의 마지막 값이 양수면 return 0
  if (A[A.length - 1] > 0)
    return 0;

  // 배열을 Loop 돌면서 음수가 나오면 Split
  let plusArr = [];
  let minusArr = [];
  for (let i=0; i<A.length - 1; i++) {
    if (A[i] < 0) {
      plusArr = A
      minusArr = A.splice(i);
      break;
    }
  }

  // 오른쪽 배열 (마이너스 배열) 을 정순으로 정렬
  minusArr.sort((a, b) => a - b);

  console.log(plusArr);
  console.log(minusArr);

  let result = 0;
  // 양수배열 Loop {
  for(let i=0; i<plusArr.length - 1; i++) {
    // 양수배열 첫번째 값과 음수배열 첫번째 값이 일치하면 Break
    if (plusArr[i] === Math.abs(minusArr[0])) {
      result = plusArr[i];
      break;
    }

    // 일치하지 않을 때 음수배열 Loop
    for (let k=0; k<minusArr.length - 1; k++) {
      // Current 의 절대값이 양수배열의 Index 값보다 작으면 Break
      if (Math.abs(minusArr[k]) < plusArr[i]) {
        break;
      }

      // Current 의 절대값이 양수배열의 Index 값과 같으면 Break, Result 에 할당
      if (Math.abs(minusArr[k]) === plusArr[i]) {
        result = plusArr[i];
        break;
      }
    }

    if (result)
      break;
  }

  return result;
}

// const A = [1,2,3,4,5,6,7,8,9];
// const A = [-1,-2,-3,-4,-5,1,2,3,4,5];
// const A = [-1,-2,-3,-4,-5,1,2,3];
const A = [-1,-2,-3,-4,-5,1,2,3,2,7,6,8,11,-11,-12,12,-13];
// const A = [3,2,-2,5,-3];
// const A = [1,1,2,-1,2,-1];
// const A = [1,2,3,-4];
const result = solution(A);
console.log(`### result: ${result}`);
console.log(`### exe time: ${new Date().getTime() - start}`);