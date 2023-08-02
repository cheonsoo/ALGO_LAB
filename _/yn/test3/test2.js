/*
[
  ['.', '.', '.', 'X', '.', '.']
  ['.', '.', '.', '.', 'X', 'X']
  ['.', '.', '.', '.', 'X', 'X']
]

...X..
....XX
..X...
*/
// Remember, all submissions are being checked for plagiarism.
// Your recruiter will be informed in case suspicious activity is detected.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(R) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = R.map(row => row.split(''));
  console.log(map);

  const VISITED = '#';
  const WALL = 'X';
  let result = 0;
  let x = -1;
  let y = 0;
  let direction = 'right';
  while (true) {
    if (direction === 'right') {
      x++;
    } else if (direction === 'down') {
      y++;
    } else if (direction === 'left') {
      x--;
    } else {
      y--;
    }

    let current;
    try {
      current = map[y][x];
    } catch (e) {}

    console.log('current: ', current);
    if (current === 'X' || current === undefined) {
      if (direction === 'right') {
        direction = 'down';
        x--;
      } else if (direction === 'down') {
        direction = 'left';
        y--;
      } else if (direction === 'left') {
        direction = 'up';
        x++;
      } else {
        direction = 'right';
        y++;
      }
      continue;
    }

    // if (current === VISITED) {
    //   break;
    // }

    if (current > 5) {
      break;
    }

    result++;
    map[y][x] = isNaN(map[y][x]) ? 0 : map[y][x] + 1;

    // if (map[y][x + 1] === WALL || map[y][x + 1] === undefined) {
    //     direction = 'down';
    // }
  }

  let cnt = 0;
  for (let a = 0; a < map.length; a++) {
    for (let b = 0; b < map[a].length; b++) {
      if (!isNaN(map[a][b])) {
        cnt++;
      }
    }
  }
  return cnt;
}

// const A = ['...X..', '....XX', '..X...'];
// const A = ['....X..', 'X......', '.....X.', '.......'];
const A = ['...X.', '.X..X', 'X...X', '..X..'];
const result = solution(A);
console.log('result', result);
