/**
 * 1. Concept
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
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/no_4963/input2.txt').toString().split('\n');

function run() {
  if (input.length === 0 || input[0] === '') return;

  const [n, m] = input.shift().split(' ').map(s => parseInt(s));

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
  function bfs(y, x) {
    let areaOfIsland = 0;
    let queue = [];
    queue.push([y, x]);

    while (queue.length > 0) {
      const cur = queue.shift();
      const [cy, cx] = cur;

      for (let i=0; i<8; i++) {
        const [ny, nx] = [cy + dy[i], cx + dx[i]];

        // 맵을 벗어나는 경우
        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

        // 값이 0이거나 이미 방문한 경우
        if (map[ny][nx] === 0 || visited[ny][nx] === true) continue;

        // 방문처리
        visited[ny][nx] = true;
        // 섬 개수 증가처리
        areaOfIsland++;
        // queue 에 다음 노드 추가
        queue.push([ny, nx]);
      }
    }

    numOfIsland++;
    return areaOfIsland;
  }

  let numOfIsland = 0;
  for (let y=0; y<n; y++) {
    for (let x=0; x<m; x++) {
      if (map[y][x] === 1 && visited[y][x] == false) {
        // 섬 개수 증가
        // numOfIsland++;
        // 방문처리
        visited[y][x] = true;
        // bfs
        bfs(y, x);
      }
    }
  }

  console.log(numOfIsland);

  run();
}

run();