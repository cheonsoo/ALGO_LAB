function makeRandonArray(N) {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(parseInt(Math.random() * 1000));
  }
  return arr;
}

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        // Swap
        let tmp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = tmp;
      }
    }
  }
  console.log(arr);
}

bubble(makeRandonArray(10));
