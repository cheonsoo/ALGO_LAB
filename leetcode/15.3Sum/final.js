var threeSum = function (nums) {
  const result = [];

  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    // Skip Duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + i;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
      }
    }
  }

  return result;
};
