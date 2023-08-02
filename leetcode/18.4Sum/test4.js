/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);

  const result = [];
  for (let a=0; a<nums.length-2; a++) {
    // let sum = nums[a];
    for (let b=a+1; b<nums.length; b++) {
      // sum += nums[b];
      for (let c=b+1; c<nums.length; c++) {
        // sum += nums[c];
        for (let d=c+1; d<nums.length; d++) {
          if (nums[a] + nums[b] + nums[c] + nums[d] === target)
            result.push([nums[a], nums[b], nums[c], nums[d]]);
        }
      }
    }
  }

  return result;
};

const nums = [-2, -1, 0, 0, 1, 2], target = 0; // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// const nums = [1,0,-1,0,-2,2], target = 0; // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// const nums = [2,2,2,2,2], target = 8; // Output: [[2,2,2,2]]
const result = fourSum(nums, target);
console.log('result', result);
