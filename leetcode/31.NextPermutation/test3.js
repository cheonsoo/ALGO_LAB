var nextPermutation = function (nums) {
  const swap = (a, b) => {
    const tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  };

  const sort = (start, end) => {
    // nums = [nums.slice(0, start), nums.slice(start)];
    // nums[1].sort();
    // nums = nums[0].concat(nums[1]);
    const tmp = nums.splice(start);
    tmp.sort((a, b) => a - b);
    for (let num of tmp) {
      nums.push(num);
    }
  };

  const size = nums.length;
  if (size === 1) return;

  let peekIdx = -1; // Get last peek index. (not biggest number)
  for (let i = 0; i < size; i++) {
    if (nums[i] > nums[i - 1]) peekIdx = i;
  }

  if (peekIdx === -1) {
    nums.sort((a, b) => a - b);
    return;
  }

  let idx = peekIdx;
  for (let i = peekIdx; i < size; i++) {
    if (nums[i] > nums[peekIdx - 1] && nums[i] < nums[idx]) idx = i;
  }

  swap(idx, peekIdx - 1);
  sort(Math.min(idx, peekIdx - 1) + 1, size - 1);

  return nums;
};

// const nums = [1, 2, 3, 4, 2];
// const nums = [1, 3, 2]; // 2, 1, 3
// [11,12,0,27,3,11,21,9,0,15,26,27,17,24,0,16,4,17,14,8,15,8,2,16,10,6,6,24,16,2,18,19,6,10,17,10,21,0,11,13,7,7,2,16,24,25,2,20,12,19,9,20]
const nums = [11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8, 15, 8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13, 7, 7, 2, 16, 24, 25, 2, 20, 12, 9, 20, 19];
const result = nextPermutation(nums);
console.log('result', result);
