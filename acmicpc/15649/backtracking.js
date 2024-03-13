/**
 * 1. Concept
 * - Backtracking
 * - Recursive Function
 *
 * 2. Time Complexity
 * - 중복이 불가능하니 O(N!)
 * - 8! = 40320
 *
 * 3. Data Structure
 * - visited<boolean>[]
 *
 */
const fs = require('fs');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/15649/input2.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(s => parseInt(s));
const visited = Array(n).fill(false);
const result = [];
function recur(num) {
  if (result.length === m) {
    console.log(result.join(' '));
    return;
  }

  for (let i=0; i<n; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    result.push(i + 1);
    recur(i + 1);
    result.pop();
    visited[i] = false;
  }
}

recur(0);