/*




*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0')
      return '0';

  // [0, 0, 0, 0, 0, 0] : 각 자리수 계산 담을 배열 초기화
  const arr = new Array(num1.length + num2.length).fill(0);
  let numArr1 = []; // 곱연산에서 밑에 오는 숫자
  let numArr2 = []; // 곱연산에서 위에 오는 숫자

  // 크기가 더 작은 숫자를 기준으로 함
  if (num1.length <= num2.length) {
    numArr1 = num1.split('');
    numArr2 = num2.split('');
  } else {
    numArr1 = num2.split('');
    numArr2 = num1.split('');
  }

  // Loop 를 0부터 시작하기 위해 배열순서를 뒤집고 convert string to number
  numArr1 = numArr1.reverse().map(item => parseInt(item));
  numArr2 = numArr2.reverse().map(item => parseInt(item));

  for (let a=0; a<numArr1.length; a++) {
    const numBelow = numArr1[a];
    for (let b=0; b<numArr2.length; b++) {
      const numUpper = numArr2[b];

      const poz = arr.length - 1 - a - b;
      arr[poz] += (numBelow * numUpper);
    }
  }

  let carry = 0;
  for (let i=arr.length-1; i>=0; i--) {
    const current = arr[i] + carry;
    const numOfOne = current % 10;
    carry = parseInt(current / 10);
    arr[i] = numOfOne;
  }

  // 마지막 자리 연산이 10이 넘지 않은 경우 배열 첫번째 값이 0이다. 제거해주자.
  if (arr[0] === 0)
    arr.shift();

  return arr.join("");
};

// const num1 = "123";
// const num2 = "456";
const num1 = "2";
const num2 = "3";

const result = multiply(num1, num2);
console.log(`### result: ${result}`);