var maxSubArray = function (nums) {
  const coord = {
    start: 0,
    end: 0,
    max: -99999999999
  };

  let summary;
  let pointer = 0;
  while (nums[pointer] !== undefined) {
    const start = nums[pointer];
    summary = start;

    if (summary > coord.max) {
      coord.start = pointer;
      coord.end = pointer;
      coord.max = summary;
    }

    for (let i = pointer + 1; i < nums.length; i++) {
      const current = nums[i];
      summary += current;

      if (coord.max < summary) {
        coord.start = pointer;
        coord.end = i;
        coord.max = summary;
      }
    }

    pointer++;
  }

  console.log(coord);

  return coord.max;
};

const start = new Date();
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Output: 6
// const nums = [-2, 1]; // Output: 1
// const nums = [-1, -2]; // Output: -1
// const nums = [-1, 0]; // Output: 0
const result = maxSubArray(nums);
console.log('result: ', result);

console.log('exe time: ', new Date() - start);
