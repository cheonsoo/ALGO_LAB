/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  for (let i=0; i<nums.length-1; i++) {
    console.log('nums[i]', nums[i]);
    console.log('nums[i+1]', nums[i+1]);
    console.log();

    if (nums[i] === '_') break;

    if (nums[i] === nums[i+1]) {
      nums.splice(i+1, 1);
      nums.push('_');
      i--;
    }
  }
  console.log(nums);
  return nums
};

// const nums = [1,1,2];
const nums = [0,0,1,1,1,2,2,3,3,4];
const result = removeDuplicates(nums);
console.log('result', result);