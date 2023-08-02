/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
  nums = nums.filter(num => num > 0).sort((a, b) => a - b);
  
  if (nums.length === 0 || nums[0] > 1) {
      return 1;
  }
  
  let result = -1;
  for (let i=0; i<nums.length; i++) {
      const current = nums[i];
      const next = nums[i + 1];
      
      if (next === undefined) {
          result = new Set(nums).size + 1;
          break;
      }
      
      if (next - current > 1) {
          result = current + 1;
          break;
      }
  }
  
  return result;
};