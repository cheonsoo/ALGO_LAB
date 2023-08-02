const dfs = (current = '', numbers = [], result = []) => {
  if (numbers.length === 0) {
      return result.push(current);
  }

  for (let i=0; i<numbers.length; i++) {
      const number = numbers[i];
      const rest = numbers.slice(0, i).concat(numbers.slice(i+1));
      dfs(current ? `${current}@${number}` : `${number}`, rest, result);
  }
};

var permute = function(nums) {
  const result = [];
  dfs('', nums, result);
  console.log(result);
  console.log(new Set(result));
  return Array.from(new Set(result)).map(item => item.split('@'));
};

const input = [1,2,1];
const result = permute(input);
console.log(result);