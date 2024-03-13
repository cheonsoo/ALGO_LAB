/**
 * 삽입 정렬
 * 손안의 카드를 정렬하는 방법과 비슷하다.
 * 매 순서마다 인접한 요소를 비교하여 자신의 위치를 찾아 삽입한다.
 * 배열의 두번째 요소부터 시작하여 그 앞(왼쪽)의 요소들과 비슷하여 값이 클 경우 자리를 바꾼다.
 */
const start = new Date().getTime();

const sort = data => {
  for (let i = 1; i < data.length; i++) {
    let tmp = data[i];

    for (let k = i - 1; k >= 0; k--) {
      if (data[k] > tmp) {
        // swap
        data[k + 1] = data[k];
        data[k] = tmp;
      }
    }
  }
  return data;
};

const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(parseInt(Math.random() * 100));
}

console.log(sort(arr).join(','));
console.log(`exe time : ${new Date().getTime() - start}`);