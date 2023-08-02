/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const dfs = (nums, combi) => {
    if (nums.length === 0 || combi.length === n) {
      list.push(combi);
      return;
    }

    for (let i=0; i<nums.length; i++) {
      const num = nums[i];
      const _nums = [...nums];
      _nums.splice(i, 1);
      dfs(_nums, `${combi}${num}`);
    }
  };

  // Validations
  if (n === 1) {
    return '1';
  } else if (n === 2) {
    return ['12', '21'][k];
  }

  const numbers = new Array(n).fill(0).map((item, idx) => idx + 1);
  const list = [];
  dfs([...numbers], '');

  list.sort();

  console.log(list);

  return list[k - 1];
};

// const n = 4, k = 3; // 213
const n = 2, k = 1;
// const n = 9, k = 0; // 213
const result = getPermutation(n, k);
console.log(`### result: ${result}`);
