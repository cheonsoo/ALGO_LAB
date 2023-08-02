function solution(arr, k, t) {
  arr.sort();

  function dfs(sum, startIndex) {
    if (arr.length <= startIndex || sum.reduce((acc, cur) => acc + cur, 0) > t) {
      // stack.push(_sum);
      return;
    }

    const combi = sum.concat(arr[startIndex]);
    const sumOfCombi = combi.reduce((acc, cur) => acc + cur, 0)
    if (sumOfCombi <= t && combi.length >= k) {
      stack.push(combi.join('@@'));
      console.log(combi.join('@@'));
    }

    for (let i=startIndex; i<arr.length; i++) {
      dfs(combi, i + 1);
    }
  }

  const stack = [];
  // dfs([], 0);
  for (let i=0; i<arr.length; i++) {
    dfs([], i);
  }


  console.log(stack);

  const removeDuplicates = new Set(stack);
  console.log(removeDuplicates);

}

const arr = [2,5,3,8,1];
const k = 3;
const t = 11; // result: 6
const result = solution(arr, k, t);
console.log(`### result: ${result}`);
