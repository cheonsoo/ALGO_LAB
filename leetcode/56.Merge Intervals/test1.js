/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // Case 1
  // 1,3,2,6,8,10,15,18
  // Case 2
  // 1,4,4,5
  // Case 3
  // 1,2,3,4,5,6,7,8
  // Case 4
  // 1,4,0,4
  
  // intervals = [[1,3],[2,6],[8,10],[15,18]];
  let nums = [];
  intervals.forEach(interA => interA.forEach(interB => nums.push(interB)));
  
  let i = 1;
  while(i < nums.length-1) {
      if (nums[i] >= nums[i+1]) {
          nums.splice(i, i+1);
      }

      i++;
  }

  const result = [];
  for (let k=0; k<nums.length; k=k+2) {
      const arr = [];
      arr.push(nums[k], nums[k+1]);
      result.push(arr);
  }

  return result;
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];
const result = merge(intervals);
console.log(result);