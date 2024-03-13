/**
 * 1. Concept
 * - BFS
 *
 * 2. Big O
 * - O(V+E) = 625 + 10000
 * - V = m * n = 25 * 25 = 625
 * - E = 4V = vm * vn = 100 * 100 = 10000
 * - O(10625)
 *
 * 3. Data Structure
 *  - map
 *  - visited
 *  - queue
 *  - result = []
 *
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input.shift();
const mapSize = parseInt(line);
const map = [...Array(mapSize)].map(() => input.shift().split('').map(n => parseInt(n)));
const visited = [...Array(mapSize)].map(() => Array(mapSize).fill(false));

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];
function bfs(y, x) {
  let aptCnt = 1;
  let queue = [];
  queue.push([y, x]);

  while(queue.length > 0) {
    let cur = queue.shift();
    let cy = cur[0];
    let cx = cur[1]

    for (let i=0; i<4; i++) {
      let ny = cy + dy[i];
      let nx = cx + dx[i];

      if (ny < 0 || ny >= mapSize || nx < 0 || nx >= mapSize) continue;

      if (map[ny][nx] === 0 || visited[ny][nx] === true) continue;

      visited[ny][nx] = true;
      aptCnt++;
      queue.push([ny, nx]);
    }
  }

  return aptCnt;
}

const result = [];
let areaCnt = 0;
for (let n=0; n<mapSize; n++) {
  for (let m=0; m<mapSize; m++) {
    if (map[n][m] === 1 && visited[n][m] === false) {
      areaCnt++;
      visited[n][m] = true;
      result.push(bfs(n, m));
    }
  }
}

console.log(areaCnt);
result.sort((a, b) => (a - b)).forEach(n => console.log(n));
