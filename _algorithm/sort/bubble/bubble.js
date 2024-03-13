/*
버블정렬은 매번 연속된 두개의 값을 비교하여 큰값을 뒤로 넘겨 정렬하는 방법이다.
(i 와 i+1 번째의 값)
한번 전체의 배열을 돌면서 값을 비교하고 다시 처음으로 돌아와 반복하므로 어떠한 조건에서도 전체 비교를 진행하므로 시간복잡도느 O(N^2) 이다.
*/
const start = new Date().getTime();

// var data = [ 8,3,4,1,5,6,2,7 ];
// const data = ['d', 'f', 'e', 'b', 'c', 'a'];
const data = ['ddddd', 'ffff', '1eee', 'bbbbbbb', 'caas', 'awd3'];

/**
 * 시간복잡도 : O(N^2)
 */
const bubbleSort = _arr => {
  let copy = _arr.slice();

  let tmp;
  for (let i = 0; i < copy.length; i++) {
    for (let k = 1; k < copy.length - i; k++) {
      if (copy[k - 1] > copy[k]) {
        tmp = copy[k - 1];
        copy[k - 1] = copy[k];
        copy[k] = tmp;
      }
    }
  }

  return copy;
};

const data_sorted = bubbleSort(data);
console.log(data.join(','));
console.log(data_sorted.join(','));

console.log(`exe time : ${new Date().getTime() - start}`);
