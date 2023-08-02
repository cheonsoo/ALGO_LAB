/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let counter = 0;
  for (let i=0; i<nums.length-1; i++) {

    if (nums[i] === '_') break;

    if (nums[i] === nums[i+1]) {
      nums.splice(i+1, 1);
      nums.push('_');
      i--;
      counter++;
    }
  }

  return nums.length - counter;
};

const nums = [1,1,2];
// const nums = [0,0,1,1,1,2,2,3,3,4];
const result = removeDuplicates(nums);
console.log(nums);
console.log('result', result);