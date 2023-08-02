var fourSum = function(nums, target) {
  const result = new Set();
  for (let a=0; a<nums.length-2; a++) {
    for (let b=a+1; b<nums.length; b++) {
      for (let c=b+1; c<nums.length; c++) {
        for (let d=c+1; d<nums.length; d++) {
          if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
            result.add([nums[a], nums[b], nums[c], nums[d]].sort((a, b) => a - b).join('@@'));
            break;
          }
        }
      }
    }
  }

  return Array.from(result).map(combination => combination.split('@@').map(num => parseInt(num)));
};

const start = new Date().getTime();
// const nums = [-2, -1, 0, 0, 1, 2], target = 0; // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// const nums = [1,0,-1,0,-2,2], target = 0; // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// const nums = [2,2,2,2,2], target = 8; // Output: [[2,2,2,2]]
const nums = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], target = 8;
const result = fourSum(nums, target);
console.log('result', result);
console.log('exe time', new Date().getTime() - start);