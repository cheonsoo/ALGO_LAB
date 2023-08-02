/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 1)
      return 1;

  nums.sort((a, b) => a - b);

  let longest = 0;
  let cnt = 1;
  let prev = nums[0];
  for (let i=1; i<nums.length; i++) {

      let current = nums[i];

      console.log(`prev: ${prev}, current: ${current}, cnt: ${cnt}`);

      if (current === prev + 1) {
          cnt++;
          prev = current;
      } else if (current === prev) {
      } else {
          cnt = 1;
          prev = current;
      }


      if (cnt > longest) {
          longest = cnt;
      }
  }

  return longest;
};