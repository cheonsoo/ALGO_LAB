const dfs = (current = [], numbers = [], result = []) => {
  // numbers 가 없으면 return
  if (numbers.length === 0)
    return result.push(current);

  // numbers Loop
  for(let i=0; i<numbers.length; i++) {
    // current = numbers 의 index
    const _current = current.concat([numbers[i]]);

    // rest = numbers 에서 current 를 제외한 나머지
    const rest = numbers.slice(0, i).concat(numbers.slice(i+1));

    // dfs 재귀
    dfs(_current, rest, result);
  }
};

const input = [1,2,3];
const result = [];
dfs([], input, result);
console.log('### result: ', result);