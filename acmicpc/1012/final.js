/**
 * 1. Concept
 *  - bfs
 *  - 이중 for 문
 *  - map 에서 값이 1이고 방문하지 않은 노드이면 bfs
 *  - bfs 에서 queue 에 방문할 node 를 담고, queue 가 빌 때까지 반복
 *  - 한번 bfs 가 실행될 때 애벌래 수 1씩 증가
 *
 * 2. Big O
 *  - BFS = O(V+E)
 *  - V = m * n = 50 * 50 = 2500
 *  - E = 4V = 4 * 2500 = 10000
 *  - O(12500)
 *
 * 3. Data
 *  - Queue<int, int>[] = []
 *  - map<int, int> = [][]
 *  - visited<bool, bool> = [][]
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function run() {
  let line = input.shift();
  line = line.split(' ');
  const n = parseInt(line[0]);
  const m = parseInt(line[1]);
  const numOfCabbage = parseInt(line[2]);
  const map = [...Array(n)].map(() => Array(m).fill(0));
  const visited = [...Array(n)].map(() => Array(m).fill(false));
  for (let i=0; i<numOfCabbage; i++) {
    line = input.shift();
    line = line.split(' ');
    const yPoz = line[0]
    const xPoz = line[1]
    map[yPoz][xPoz] = 1;
  }

  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  function bfs(y, x) {
    let areaOfCabbages = 1;
    let queue = [];
    queue.push([y, x]);

    while(queue.length > 0) {
      let cur = queue.shift();
      let cy = cur[0]
      let cx = cur[1];

      for (let i=0; i<4; i++) {
        let ny = cy + dy[i];
        let nx = cx + dx[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

        if (map[ny][nx] === 0 || visited[ny][nx] === true) continue;

        areaOfCabbages++;
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }

    return areaOfCabbages;
  }

  let wormCnt = 0;
  for (let y=0; y<n; y++) {
    for (let x=0; x<m; x++) {
      if (map[y][x] === 1 && visited[y][x] === false) {
        visited[y][x] = true
        wormCnt++;
        bfs(y, x);
      }
    }
  }

  console.log(wormCnt);
}

const numTestCase = parseInt(input.shift());
[...Array(numTestCase)].forEach((item, idx) => {
  run();
});