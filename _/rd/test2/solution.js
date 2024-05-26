function solution(N) {
  if (N < 4) return N;
  const result = [1, 2, 3];
  for (let i = 3; i < N; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result.pop();
}

// const N = 1; // 1
// const N = 2; // 2
// const N = 3; // 3
const N = 10;
const result = solution(N);
console.log(result);
