function getLargest(sticker, starter) {
  let sum = 0;

  let largest = sticker[starter];
  let largestIdx = starter;

  if (largestIdx === 0) {
    sticker.splice(0, 2);
    sticker.splice(sticker.length -1, 1);
  } else {
    sticker.splice(largestIdx - 1, 3);
  }

  sum += largest;
  largest = 0;
  largestIdx = 0;

  while(true) {
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

    // console.log(`### largest: ${largest}`);
    console.log(sticker);

    sum += largest;
    largest = 0;
    largestIdx = 0;

    if (!sticker.length) break;
  }

  return sum;
}

function solution(sticker) {
  for (let i=0; i<sticker.length; i++) {
    let sum = getLargest(sticker.slice(), i);
    console.log(`### sum: ${sum}`);
  }
}

const arr = [14, 6, 5, 11, 3, 9, 2, 10]; // 36 = 6 + 11 + 9 + 10
// const arr = [1, 3, 2, 5, 4]; // 8

const result = solution(arr);
console.log(result);