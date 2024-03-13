/**
 * 1. Concept
 *  - 이중 for 문 각 노드를 방문
 *  - 각 노드의 값이 1일 경우 bfs() 탐색 시작
 *  - bfs 시작 시 이미 방문하였으면 종료
 *  - 탐색하면서 방문한 칸수 1씩 증가
 *  - 종료위치에 도닥하면 bfs 탐색 종료 -> 칸수를 배열에 저장
 *
 * 2. 시간복잡도
 *  - BFS = O(V+E)
 *    - V = m * n = 100 * 100 = 10000
 *    - E = V * 4 = 10000 * 4 = 40000
 *    - O(50000)
 *      - 1초에 연산 2억개 => 실행가능
 *
 * 3. 자료구조
 *  - map<int, int> = [][]
 *  - visited<bool, bool> = [][];
 *  - result<int> = 0
 *  - queue<int, int>[] = []
 *
 */

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('/Users/cheonsoo.park/Workspace/chance/_LABS/ALGO_LAB/acmicpc/no_2178/input4.txt').toString().split('\n');

// Initialize Map & Visited
let line = input[0];
line = line.split(' ');
const n = line[0];
const m = line[1];

const map = [];
const visited = [];
for (let i=0; i<n; i++) {
  line = input[i + 1];
  map[i] = line.split('').map(n => parseInt(n));
  visited[i] = Array(parseInt(m)).fill(false);
}

console.log(map);
console.log(visited);

// bfs()
const dy = [0, 1, 0, -1]; // 우, 하, 좌, 상
const dx = [1, 0, -1, 0];
function bfs(y, x) {
  let queue = [];
  queue.push([y, x]);

  while (queue.length > 0) {
    let cur = queue.shift();
    let cy = cur[0];
    let cx = cur[1];

    for (let i=0; i<4; i++) {
      let ny = cy + dy[i];
      let nx = cx + dx[i];

      // Map 벗어남
      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

      // 값이 0이거나 이미 방문한 경우
      if (map[ny][nx] === 0 || visited[ny][nx] === true) continue;

      // 다음 노드 방문처리, Step 증가, Queue 에 추가
      visited[ny][nx] = true;
      queue.push([ny, nx]);
      map[ny][nx] = map[cy][cx] + 1;
    }
  }

  return map[n-1][m-1];
}
// function bfs(y, x) {
//   let step = 1;
//   let queue = [];
//   queue.push([y, x]);

//   while (queue.length > 0) {
//     let cur = queue.shift();
//     let cy = cur[0];
//     let cx = cur[1];
//     let cPath = cur[2];

//     for (let i=0; i<4; i++) {
//       let ny = cy + dy[i];
//       let nx = cx + dx[i];

//       // Map 벗어남
//       if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

//       // 값이 0이거나 이미 방문한 경우
//       // if (map[ny][nx] === 0) continue
//       // if (map[ny][nx] === 0 || visited[ny][nx] === true) continue

//       // 다음 노드 방문처리, Step 증가, Queue 에 추가
//       // visited[ny][nx] = true;
//       // step++;
//       queue.push([ny, nx, cPath++]);
//       map[ny][nx] = map[y][x] + 1;
//     }
//   }

//   return map[n-1][m-1];
// }

// loop twice
let minPath = n * m; // 최대값으로 설정
for (let y=0; y<n; y++) {
  for (let x=0; x<m; x++) {
    // bfs()
    if (map[y][x] === 1 && visited[y][x] === false) {
      visited[y][x] = true;
      minPath = Math.min(minPath, bfs(y, x));
    }
  }
}

console.log(minPath);