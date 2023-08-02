function solution(sticker) {
  let sums = [];

  for (let i=0; i<sticker.length; i++) {
    let arr = sticker.slice();
    let sum = 0;
    debugger;

    while(true) {
      let largest = arr[i];
      let largestIdx = i;
      arr[i] = -1;

      // Find Largest Number
      if (largest > -1) {
        for (let i=0; i<arr.length; i++) {
          if (arr[i] === -1) continue;

          if (arr[i] > largest) {
            largest = arr[i];
            largestIdx = i;
          }
        }
      }

      if (largestIdx === 0) {
        arr[0] = -1;
        arr[1] = -1;
        arr[arr.length] = -1;
      } else {
        arr[largestIdx - 1] = -1;
        arr[largestIdx] = -1;
        arr[largestIdx + 1] = -1;
      }
      console.log(arr);

      sum += largest;
      largest = 0;
      largestIdx = 0;

      if (!arr.filter(item => item !== -1).length) {
        sums.push(sum);
        break;
      }
    }
  }

  console.log(sums);

  return 0;
}

const arr = [14, 6, 5, 11, 3, 9, 2, 10]; // 36 = 6, 11, 9, 10
// const arr = [1, 3, 2, 5, 4]; // 8

const result = solution(arr);
console.log(result);