function solution(N, road, K) {
  let answer = 0;

  const map = [...Array(N)].map(() => Array(N).fill(Infinity));
  for (let y=0; y<N; y++) {
    map[y][y] = 0;
  }
  road.forEach(row => {
    map[row[0] - 1][row[1] - 1] = row[2];
    map[row[1] - 1][row[0] - 1] = row[2];
  });
  const visited = Array(map.length).fill(false);
  let distance = [];

  const findMinDistance = () => {
    let minDistance = Infinity;
    let minIndex = 0;

    for (let i=0; i<map.length; i++) {
      if (!visited[i] && minDistance > distance[i]) {
        minDistance = distance[i];
        minIndex = i;
      }
    }

    return minIndex;
  };

  const dijkstra = (node) => {
    const start = node - 1
    distance = map.map((_, i) => map[start][i]);
    visited[start] = true;

    for (let i=0; i<distance.length - 2; i++) {
      const minIdx = findMinDistance();
      visited[minIdx] = true;
      for (let k=0; k<distance.length; k++) {
        if (!visited[k] && distance[k] > distance[minIdx] + map[minIdx][k]) {
          distance[k] = distance[minIdx] + map[minIdx][k];
        }
      }
    }
  };

  dijkstra(1);

  console.log(distance.join(' '));

  return distance.filter(item => item <= K).length;
}

// Case 1
/*
const map = [
  [0, 1, Infinity, 2, Infinity],
  [1, 0, 3, Infinity, 2],
  [Infinity, 3, 0, Infinity, 1],
  [2, Infinity, Infinity, 2],
  [Infinity, 2, 1, 2, 0]
]
*/
const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2]
];
const K = 3; // result 4

// Case 2
// const N = 6;
// const road = [
//   [1, 2, 1],
//   [1, 3, 2],
//   [2, 3, 2],
//   [3, 4, 3],
//   [3, 5, 2],
//   [3, 5, 2],
//   [5, 6, 1]
// ];
// const K = 4; // result: 4

const result = solution(N, road, K);
console.log(result);