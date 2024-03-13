/**
 * 1. Concept
 * - 동전들의 배열을 내림차순으로 정렬
 * - 동전배열을 loop
 * - cnt 에 K / 현재동전값 을 할당 (정수로)
 * - K 에 K 를 현재동전값으로 나눈 나머지를 할당 (현재 동전값이 K 보다 크면 K 는 변하지 않음)
 * - Loop 가 끝나면 cnt 출력
 *
 * 2. Time Complexity
 * - O(N)
 *
 * 3. Data Structure
 *
 */
const fs = require('fs');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/11047/input.txt').toString().split('\n');

let [n, k] = input.shift().split(' ').map(s => parseInt(s));
const coins = [...Array(n)].map(() => parseInt(input.shift()));
coins.sort((a, b) => b - a);

let cnt = 0;
for (let i=0; i<n; i++) {
  let cur = coins[i];
  cnt += Math.floor(k / cur);
  k = k % cur;
}

console.log(cnt);
