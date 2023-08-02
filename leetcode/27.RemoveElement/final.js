/*
#1
[3,2,2,3]
3

#2
[0,1,2,2,3,0,4,2]
2

#3
[]
0

#4
[3,3]
5
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  if (nums.length === 0)
      return 0;
  if (nums.length === 1)
      return nums[0] === val ? 0 : 1;
  
  let idx = 0;
  let count = 0;
  while (nums[idx] !== '_' && idx < nums.length) {
      // swap
      if (nums[idx] === val) {
          nums.splice(idx, 1);
          nums.push('_');
          count++;
          continue;
      }
      
      idx++;
  }
  return nums.length - count;
};