/*
[
  [1,2,6,7,15,16],
  [3,5,8,14,17,26],
  [4,9,13,18,25,27],
  [10,12,19,24,28,33],
  [11,20,23,29,32,34],
  [21,22,30,31,35,36]
]
1, 2,
*/
function solution(n, r, c) {
  // No need for a 2D array, calculate position directly
  const total = n * n;
  let cnt = 1;
  let x = Math.min(c - 1, n - c);
  let y = r - 1;
  let direction = '';

  while (cnt <= total) {
    // Handle right and left movements without additional variables
    if (x === 0 || x === n - 1) {
      direction = direction === 'up' ? 'down' : 'up';
      y += direction === 'up' ? -1 : 1;
    } else {
      // Handle up and down movements only when needed (not at edges)
      if (direction === '') {
        x += c > Math.floor(n / 2) ? -1 : 1;
      } else if (direction === 'up' && y === 0) {
        direction = 'down';
        x += 1;
      } else if (direction === 'down' && y === n - 1) {
        direction = 'up';
        x -= 1;
      }
    }
    cnt++;
  }

  return cnt - 1; // Return the final value (cnt starts at 1)
}

const result = solution(5, 3, 2); // 9
// const result = solution(6, 5, 4); // 29

console.log(result);
