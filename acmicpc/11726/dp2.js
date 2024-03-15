/**
 * 1. Conncept
 * - DP
 * - Fn(N) = Fn(N-1) + Fn(N-2)
 * - N 이 1, 2, 3 일때의 결과값은 알고 있으니 N 이 3 이상일때부터 N 까지 Loop
 * - Loop 돌면서 result 에 현재의 결과값을 push
 *
 * 2. Time Complexity
 * - O(N)
 *
 * 3. Data Structure
 * - result: int[] : 이전값저장 Array
 *
 */
const fs = require('fs');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/11726/input2.txt').toString().split('\n');

const n = parseInt(input[0]);

const result = [1, 2, 3];
for (let i=3; i<n; i++) {
  result.push((result[i - 1] + result[i - 2]) % 10007);
}

console.log(result);
console.log(result.pop());
