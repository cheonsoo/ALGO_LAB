const swap = (arr, a, b) => {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

const sort = (arr, start, end) => {
  const arrs = [arr.slice(0, start), arr.slice(start)];
  arrs[1].sort();
  arr = arrs[0].concat(arrs[1]);
  return arr;
};

var nextPermutation = function (nums) {
  const size = nums.length;
  if (size === 1) return nums;

  let peekIdx = -1; // Get last peek index. (not biggest number)
  for (let i = 0; i < size; i++) {
    if (nums[i] > nums[i - 1]) peekIdx = i;
  }

  if (peekIdx === -1) {
    nums.sort();
  }

  let idx = peekIdx;
  for (let i = peekIdx; i < size; i++) {
    if (nums[i] > nums[peekIdx - 1] && nums[i] < nums[idx]) idx = i;
  }

  swap(nums, idx, peekIdx - 1);
  nums = sort(nums, Math.min(idx, peekIdx - 1) + 1, size - 1);
  console.log(nums);

  return nums;
};
// const nums = [1, 2, 3, 4, 2];
const nums = [1, 3, 2]; // 2, 1, 3
const result = nextPermutation(nums);
console.log('result', result);
