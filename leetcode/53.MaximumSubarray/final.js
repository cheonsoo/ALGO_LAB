var maxSubArray = function (nums) {
  let max = nums[0];
  let summary = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    summary = current > summary + current ? current : summary + current;
    max = Math.max(summary, max);
  }
  return max;
};

const start = new Date();
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Output: 6
// const nums = [-2, 1]; // Output: 1
// const nums = [-1, -2]; // Output: -1
// const nums = [-1, 0]; // Output: 0
const result = maxSubArray(nums);
console.log('result: ', result);

console.log('exe time: ', new Date() - start);
