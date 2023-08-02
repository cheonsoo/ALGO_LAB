function spaceThree(A) {
  let sum = 0;
  while(true) {
    let largest = 0;
    let idx = 0;

    // 왼쪽부터 3번째 항목까지 중에서 가장 큰 값을 찾는다
    for (let i=0; i<3; i++) {
      if (A[i] > largest) {
        largest = A[i];
        idx = i;
      }
    }

    // 가장 큰 숫자와 오른쪽 잘리는 숫자 제거
    A = A.slice(idx + 2);
    sum = sum + largest;

    largest = 0;
    idx = 0;

    if (!A.length) break;
  }
  return sum;
};

function spaceTwo(A) {
  let sum = 0;
  while(true) {
    let largest = 0;
    let idx = 0;

    // 왼쪽부터 3번째 항목까지 중에서 가장 큰 값을 찾는다
    for (let i=0; i<2; i++) {
      if (A[i] > largest) {
        largest = A[i];
        idx = i;
      }
    }

    // 가장 큰 숫자와 오른쪽 잘리는 숫자 제거
    A = A.slice(idx + 2);
    sum = sum + largest;
    debugger;
    largest = 0;
    idx = 0;

    if (!A.length) break;
  }
  return sum;
};

function solution(A) {
  let sum = spaceThree(A);
  let sum2 = spaceTwo(A);
  console.log(`### sum: ${sum}`);
  console.log(`### sum2: ${sum2}`);
  return sum;
}

// let arr = [12,12,12,12,12]; // 36
// let arr = [12, 80, 14, 22, 100]; //180
let arr = [1,2,3,4,5,6,7,8,9,10];
// 3+7+10 = 20
// 2+4+6+8+10 = 30
// 2+5+8
const result = solution(arr)
console.log(result);