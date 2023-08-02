/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let result = [-1, -1];
  if (nums.length === 0)
      return result;

  for (let i=0; i<nums.length; i++) {
      if (nums[i] === target) {
          result[0] = i;

          for (let k=nums.length - 1; k>=i; k--) {
              if (nums[k] === target) {
                  result[1] = k;
                  break;
              }
          }

          break;
      }
  }

  return result;
};