function findLargest(arr) {
  let largest = 0;
  let largestIdx = 0;

  // 가장 큰 값과 idx 를 찾는다
  for (let i=0; i<arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      largestIdx = i;
    }
  }

  // 배열에서 가장 큰값의 왼쪽과 오른쪽 값을 제거
  arr.splice(largestIdx === 0 ? largestIdx : largestIdx - 1, largestIdx + 2);

  return {
    A: arr,
    largest: largest
  }
}

function solution(A) {
  let sum = 0;
  while(true) {
    const data = findLargest(A);
    A = data.A;
    sum += data.largest;

    if (!A.length) break;
  }

  return sum;
}

let arr = [12,12,12,12,12]; // 36
// let arr = [12, 80, 14, 22, 100]; //180
// let arr = [1,3,2,4]; // 7
// let arr = [1,2,3,4,5,6,7,8,9,10]; // 30
// let arr = [2,1,4,3,6,5,8,7,10,9]; // 30
// 3+7+10 = 20
// 2+4+6+8+10 = 30
// 2+5+8
const result = solution(arr)
console.log(result);