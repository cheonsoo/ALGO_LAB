/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length === 0 || nums.length === 1) return [];

  nums = nums.sort((a, b) => a - b);
  console.log(nums.join(', '));
  const result = new Set();

  // [-4, -1, -1, 0, 1, 2]
  // [-2, -1, 0, 1, 2, 3]
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = 0;
      let val1 = nums[i];
      let val2 = nums[left];
      let val3 = nums[right];

      sum = val1 + val2 + val3;
      result.add(`${val1}@${val2}@${val3}`);

      if (sum === target) {
        result.add(`${val1}@${val2}@${val3}`);
        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      }
    }
  }

  let numbers = Array.from(result)
    .map(item => item.split('@').map(num => parseInt(num)))
    .map(nums => nums.reduce((prev, current) => prev + current, 0));

  console.log(numbers);

  let closest;
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    if (!closest) {
      closest = current;
    }

    if (Math.abs(current - target) < Math.abs(closest - target)) {
      closest = current;
    }
  }

  return closest;
};
