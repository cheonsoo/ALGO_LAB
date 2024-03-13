/**
 * 1. Concept
 * - 1부터 Loop 돌면서 재귀함수
 * - Backtracking
 *  -
 *
 * 2. Big O
 * - O(N^N) : 중복이 가능할 경우
 * - O(N!) : 중복이 불가능할 경우
 *
 * 3. Data Structure
 *
 */
const fs = require('fs');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/15649/input2.txt').toString();

const [n, m] = input.split(' ').map(n => parseInt(n));
// const visited = Array(n+1).fill(false);

function recur(num, result, visited) {
  if (result.length === m) {
    console.log(result.join(' '));
    return;
  }

  for (let i=1; i<=n; i++) {
    if (visited[i] === false) {
      visited[i] = true;
      result.push(i);
      recur(num + 1, result, visited);
      visited[i] = false;
      result.pop();
    }
  }
}

recur(0, [], Array(n+1).fill(false));