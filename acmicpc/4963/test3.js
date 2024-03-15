/**
 * 1. Concept
 *  - bfs
 *  - 이중 loop로 모든 지점을 돌면서 bfs를 돌린다.
 *  - 대각선 가능
 *
 * 2. Big O
 * - BFS = O(V+E)
 *
 * 3. Data Structure
 *  - queue: []
 *  - numOfIsland: int
 *  -
 */
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/4963/input1.txt').toString().split('\n');

function run() {
  if (input.length === 0 || input[0] === '' || input[0] === '0 0') return;

  const [m, n] = input.shift().split(' ').map(s => parseInt(s));

  const map = [...Array(n)].map(() => input.shift().split(' ').map(s => parseInt(s)));
  const visited = [...Array(n)].map(() => Array(m).fill(false));

  // console.log(`n: ${n}, m: ${m}`);
  // map.forEach(d => console.log(d.join(' ')));
  // visited.forEach(d => console.log(d.join(' ')));

  // 대각선 허용 안할 때
  // const dy = [0, 1, 0, -1];
  // const dx = [1, 0, -1, 0];
  // 대각선 허용할 때
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const dx = [1, 1, 0, -1, -1, -1, 0, 1];

  const bfs = (y, x) => {
    let cnt = 1;
    const queue = [];
    queue.push([y, x]);

    while (queue.length > 0) {
      const current = queue.shift();
      const cy = current[0];
      const cx = current[1];

      for (let i=0; i<8; i++) {
        const ny = cy + dy[i];
        const nx = cx + dx[i];

        if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
        if (visited[ny][nx] || map[ny][nx] === 0) continue;

        cnt++;
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }

    return cnt;
  };

  let numOfArea = 0;
  const result = [];
  for (let y=0; y<n; y++) {
    for (let x=0; x<m; x++) {
      if (!visited[y][x] && map[y][x] === 1) {
        numOfArea++;
        visited[y][x] = true;
        result.push(bfs(y, x));
      }
    }
  }

  console.log(numOfArea);
  run();
}

run();