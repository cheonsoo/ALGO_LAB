/**
- Concept
  - 이중 for 문을 사용하여 각 노드를 방문
  - 값이 1이면 bfs 탐색 시작
  - 이미 방문하였으면 return
  - bfs 를 통해 값을 갱신
  - 갱신 값:
    - 그림의개수: pCnt
    - 최대그림넓이: maxPicArea

- 시간복잡도
  - BFS = O(V+E)
  - V = m * n = 500 * 500 = 250000
    - Vector: 하나의 노드
  - E = V * 4 = 250000 * 4 = 1000000
    - Edge: 각 노드에 연결된 에지의 수. 최대값으로 4개를 잡음
  = O(1250000)
  - 1초에 연산 2억개 => 실생가능

- 자료구조
  - map: 그림 정보
  - checked: 방문여부
  - queue: bfs 탐색을 위한 큐
*/
const fs = require('fs');
// const input = fs.readFileSync('/div/stdin').toString().split('\n');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/no_1926/input.txt').toString().split('\n');

let line = input[0];
line = line.split( ' ');
const n = parseInt(line[0]);
const m = parseInt(line[1]);

const map = [];
const checked = [];
for (let y=0; y<n; y++) {
  line = input[y + 1];
  map[y] = line.split(' ').map(v => parseInt(v));
  checked[y] = Array(parseInt(m)).fill(false);
}

console.log(n, m);
console.log(map);
console.log(checked);

const dy = [0, 1, 0, -1]; // 우, 하, 좌, 상
const dx = [1, 0, -1, 0]; // 우, 하, 좌, 상
function bfs(y, x) {
  let picArea = 1;
  let queue = [];
  queue.push([y, x]);

  while (queue.length > 0) {
    let cur = queue.shift();
    let cy = cur[0];
    let cx = cur[1];

    // 현재 위치(cur) 에서 모든 에지(4방향)에 대해 탐색하고 큐에 추가
    for (let i=0; i<4; i++) {
      let ny = cy + dy[i];
      let nx = cx + dx[i];

      // 맵을 벗어남
      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

      // 값이 0이거나 이미 방문한 경우
      if (map[ny][nx] === 0 || checked[ny][nx] === true) continue;

      // 방문처리
      checked[ny][nx] = true;
      // 그림사이즈 1 증가
      picArea++;
      // 큐에 다음 에지 추가
      queue.push([ny, nx]);
    }
  }

  return picArea;
}
let pCnt = 0;
let maxPicArea = 0;
for (let y=0; y<n; y++) {
  for (let x=0; x<m; x++) {
    if (map[y][x] === 1 && checked[y][x] === false) {
      checked[y][x] = true;
      pCnt++;
      maxPicArea = Math.max(maxPicArea, bfs(y, x));
    }
  }
}

console.log(pCnt);
console.log(maxPicArea);
