function solution(sticker) {
  let sum = 0;

  while(true) {
    let largest = 0;
    let largestIdx = 0;

    // Find Largest Number
    for (let i=0; i<sticker.length; i++) {
      if (sticker[i] > largest) {
        largest = sticker[i];
        largestIdx = i;
      }
    }

    if (largestIdx === 0) {
      sticker.splice(0, 2);
      sticker.splice(sticker.length -1, 1);
    } else {
      sticker.splice(largestIdx - 1, 3);
    }
    console.log(`### largest: ${largest}`);
    console.log(sticker);

    sum += largest;
    largest = 0;
    largestIdx = 0;

    if (!sticker.length) break;
  }

  return sum;
}

const arr = [14, 6, 5, 11, 3, 9, 2, 10]; // 36 = 6 + 11 + 9 + 10
// const arr = [1, 3, 2, 5, 4]; // 8

const result = solution(arr);
console.log(result);