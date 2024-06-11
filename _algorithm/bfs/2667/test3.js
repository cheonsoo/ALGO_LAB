/**
 * 1. Concept
 * BFS
 *
 * 2. Time Complexity
 * O(V+E) = Vectors + Edges = 4(7 X 7) = 28 * 28 = 784
 * V = M * N = 7 X 7 = 49
 * E = 4v = 4 x 9 = 36
 *
 */
const fs = require('fs');
const input = fs.readFileSync('/Users/chance/Workspace/chance/ALGO_LAB/_algorithm/bfs/2667/input1.txt').toString().split('\n');

let N = parseInt(input.shift());
let map = [...Array(N)].map(() => input.split('').map((s) => parseInt(s)));
let visited = [...Array(N)].map(() => Array(N).fill(false));

const bfs = (y, x) => {
  let cnt = 1;
  const queue = [];
  queue.push([y, x]);

  while (queue.length > 0) {
    const [cy, cx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [cy + dy[i], cx + dx[i]];

      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
      if (visited[ny][nx] || map[ny][nx] === 0) continue;

      cnt++;
      ``;
      visited[ny][nx] = true;
      queue.push([ny, nx]);
    }
  }
};

const result = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (!visited[y][x] && map[y][x] === 1) {
      visited[y][x] = true;
      result.push(bfs(y, x));
    }
  }
}
