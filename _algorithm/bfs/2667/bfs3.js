const fs = require('fs');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/_algorithm/bfs/2667/input1.txt').toString().split('\n');

const m = parseInt(input.shift());
const map = [...Array(m)].map(() => input.shift().split('').map(s => parseInt(s)));
const visited = [...Array(m)].map(() => Array(m).fill(false));

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];
const bfs = (y, x) => {
  let cnt = 1;
  const queue = [];
  queue.push([y, x]);

  while (queue.length > 0) {
    const [cy, cx] = queue.shift();

    for (let i=0; i<4; i++) {
      const [ny, nx] = [cy + dy[i], cx + dx[i]];

      if (ny < 0 || ny >= m || nx < 0 || nx >= m) continue;
      if (visited[ny][nx] || map[ny][nx] === 0) continue;

      cnt++;
      visited[ny][nx] = true;
      queue.push([ny, nx]);
    }
  }

  return cnt;
};

const result = [];
for (let y=0; y<m; y++) {
  for (let x=0; x<m; x++) {
    if (!visited[y][x] && map[y][x] === 1) {
      visited[y][x] = true;
      result.push(bfs(y, x));
    }
  }
}

console.log(result.join(' '));