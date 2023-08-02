const start = new Date().getTime();

function dfs(result = [], arr = [], strSize = 1) {
  if (arr.length === 0) return result;
  const slice = arr.slice(0, strSize);
  if (Array.from(new Set(slice.split(''))).length === slice.length)
    result.push(arr.slice(0, strSize));
  return dfs(result, arr.slice(1), strSize);
}

function solution(s) {
  let strs = [];

  if (Array.from(new Set(s)).length === s.length)
    strs.push(s);

  for (let i=1; i<s.length; i++) {
      for (let k=0; k<s.length; k++) {
          dfs(strs, s, i);
      }
  }

  const answer = Array.from(new Set(strs)).sort();
  console.log(answer);

  return answer.length;
}


// const input = 'abcd';
// const input = 'abac';
// const input = 'zxzxz';
const input = 'aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnn';

const result = solution(input);
console.log('### result: ', result);
console.log('### exe time: ', new Date().getTime() - start);