/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums); // [ -2, -1, 0, 0, 1, 2 ]

  let arrs = [];
  let currentIdx = 0;
  for (let i=0; i<nums.length; i++) {
    currentIdx = i;

    for (let k=0; k<nums.length; k++) {
      if (currentIdx === k)
        continue;

      let arr = nums[i] < nums[k] ? [nums[i], nums[k]] : [nums[k], nums[i]];
      arrs.push(arr);
    }
  }

  console.log(arrs);

  let result = new Set();
  for (let i=0; i<arrs.length; i++) {
    currentIdx = 0;
    for (let k=0; k<arrs.length; k++) {
      if (currentIdx === k)
        continue;

      if (arrs[i][0] + arrs[i][1] + arrs[k][0] + arrs[k][1] === target) {
        // result.push([arrs[i][0], arrs[i][1], arrs[k][0], arrs[k][1]]);
        // result.add(`${arrs[i][0]}${arrs[i][1]}${arrs[k][0]}${arrs[k][1]}`);
        result.add([arrs[i][0], arrs[i][1], arrs[k][0], arrs[k][1]].sort((a, b) => a - b).join('@@'));
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
