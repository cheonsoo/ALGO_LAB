/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // Validations
  if (nums.length === 1) {
    return true;
  }

  const dfs = (startIdx, steps, footPrints) => {
    // 배열의 제일 마지막 인덱스에 도착
    // if (startIdx + steps >= nums.length - 1) {
    //   footPrints = `${footPrints}@@${startIdx}:${nums[startIdx]}`;
    //   footPrintsList.push(footPrints);
    //   console.log(`### footPrints: ${footPrints}`);
    //   return;
    // }
    // if (startIdx + 1 + steps === nums.length) {
    //   footPrints = `${footPrints}@@${startIdx}:${nums[startIdx]}`;
    //   console.log(`### footPrints: ${footPrints}`);
    //   return;
    // }

    // 배열의 마지막 인덱스를 넘어가는 케이스
    // if (startIdx + 1 + steps > nums.length) {
    //   console.log(`### footPrints: ${footPrints}`);
    //   console.log(`### Can't reach the end`);
    //   return;
    // }

    // 0 체크

    for (let i=startIdx+1; i<=startIdx + steps; i++) {
      if (i === nums.length - 1) {
        console.log('### Reached !!!');
        footPrintsList.push(`${footPrints}@@${i}:${nums[i]}`);
        continue;
      }
      if (i > nums.length - 1) {
        console.log('### Reached !!!');
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

  const footPrintsList = [];
  dfs(0, nums[0], `0:${nums[0]}`);
  console.log(footPrintsList);

  return footPrintsList.length > 0 ? true : false;
};

const input = [2,3,1,1,4];
// const input = [3,2,1,0,4];
// const input = [2,0];
// const input = [8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5];
const result = canJump(input);
console.log(`### result: ${result}`);
