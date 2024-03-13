/**
 * 1. Concept
 * - 이진탐색
 * - N 정렬 후 이진탐색
 *
 * 2. Time Complexity
 * - 이진탐색
 * - N: 100,000 (2e5), M: 100,000 (2e5)
 * - N 정렬: O(NlogN)
 * - N에서 M개의 수 이진탐색: O(MlogN)
 * - O((N+M)logN) = 200,000log100,000 = 200,000 * 17 = 3,400,000
 * => 가능
 *
 * 3. Data Structure
 * - int
 * - int
 *
 */
const fs = require('fs');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/1920/input1.txt').toString().trim().split('\n');

const n = parseInt(input.shift());
const nums = input.shift().split(' ').map(s => parseInt(s));
const m = parseInt(input.shift());
const targets = input.shift().split(' ').map(s => parseInt(s));

function binarySearch(start, end, target) {
  if (start === end) {
    console.log(nums[start] === target ? 1 : 0);
    return;
  }

  mid = Math.floor((start + end) / 2);
  if (nums[mid] < target) {
    binarySearch(mid+1, end, target);
  } else {
    binarySearch(start, mid, target);
  }
}

nums.sort((a, b) => a - b);
targets.forEach(target => binarySearch(0, n-1, target));

