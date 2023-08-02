function getLargest(sticker, starter) {
  let sum = 0;

  let largest = sticker[starter];
  let largestIdx = starter;

  if (largestIdx === 0) {
    sticker[0] = -1;
    sticker[1] = -1;
    sticker[sticker.length - 1] = -1;
  } else if (largestIdx === sticker.length - 1) {
    sticker[starter - 1] = -1;
    sticker[starter] = -1;
    sticker[0] = -1;
  } else {
    sticker[largestIdx - 1] = -1;
    sticker[largestIdx] = -1;
    sticker[largestIdx + 1] = -1;
  }

  sum += largest;
  largest = 0;
  largestIdx = 0;

  while(true) {
    // Find Largest Number
    for (let i=0; i<sticker.length; i++) {
      if (sticker[i] === -1) continue;

      if (sticker[i] > largest) {
        largest = sticker[i];
        largestIdx = i;
      }
    }

    if (largestIdx === 0) {
      sticker[0] = -1;
      sticker[1] = -1;
      sticker[sticker.length - 1] = -1;
    } else if (largestIdx === sticker.length - 1) {
      sticker[largestIdx - 1] = -1;
      sticker[largestIdx] = -1;
      sticker[0] = -1;
    } else {
      sticker[largestIdx - 1] = -1;
      sticker[largestIdx] = -1;
      sticker[largestIdx + 1] = -1;
    }

    sum += largest;
    largest = 0;
    largestIdx = 0;

    if (!sticker.filter(item => item !== -1).length) break;
  }

  return sum;
}

function solution(sticker) {
  let largestSum = 0;
  // let sum = getLargest(sticker.slice(), 2);
  // console.log(`### sum: ${sum}`);

  for (let i=0; i<sticker.length; i++) {
    let sum = getLargest(sticker.slice(), i);
    console.log(`### sum: ${sum}`);
    if (largestSum < sum) largestSum = sum;
  }

  return largestSum;
}

// const arr = [14, 6, 5, 11, 3, 9, 2, 10]; // 36 = 6, 11, 9, 10
const arr = [1, 3, 2, 5, 4]; // 8

const result = solution(arr);
console.log(`### result: ${result}`);