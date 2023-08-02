/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function(nums) {
  // Validations
  if (nums.length === 1) {
    return 0;
  }

  if (nums[0] === 0) {
    return -1;
  }

  const dfs = (startIdx, steps, footPrints) => {
    for (let i=startIdx+1; i<=startIdx + steps; i++) {
      if (i === nums.length - 1) {
        // console.log('### Reached !!!');
        footPrintsList.push(`${footPrints}@@${i}:${nums[i]}`);
        continue;
      }
      if (i > nums.length - 1) {
        // console.log('### Reached !!!');
        footPrintsList.push(`${footPrints}@@${nums.length - 1}:${nums[nums.length - 1]}}`);
        continue;
      }
      if (i >= nums.length) {
        continue;
      }
      if (nums[0] === 0 && nums.length - i > 0) {
        continue;
      }

      dfs(i, nums[i], `${footPrints}@@${i}:${nums[i]}`);
    }
  };

  let footPrintsList = [];
  dfs(0, nums[0], `0:${nums[0]}`);

  footPrintsList = footPrintsList.map(item => item.split('@@')).sort((a, b) => a.length - b.length);
  console.log(footPrintsList);

  return footPrintsList.length > 0 ? footPrintsList[0].length - 1 : -1;
};

// const input = [2,3,1,1,4];
// const input = [3,2,1,0,4];
// const input = [2,0];
const input = [6,2,6,1,7,9,3,5,3,7,2,8,9,4,7,7,2,2,8,4,6,6,1,3];
// const input = [8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5];
const result = jump(input);
console.log(`### result: ${result}`);
