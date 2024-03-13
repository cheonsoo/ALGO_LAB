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

function recur(num, result, visited) {
  if (result.length >= m) {
    console.log(result.join(' '));
    return;
  }

  for (let i=0; i<n; i++) {
    if (visited[i] === false) {
      const visitedTmp = JSON.parse(JSON.stringify(visited));
      const resultTmp = JSON.parse(JSON.stringify(result));
      visitedTmp[i] = true;
      resultTmp.push(i + 1);
      recur(i + 1, resultTmp, visitedTmp);
    }
  }
}

recur(0, [], Array(n).fill(false));