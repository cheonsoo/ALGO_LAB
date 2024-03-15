const map = [
  [0, 2, 5, 1, Infinity, Infinity],
  [2, 0, 3, 2, Infinity, Infinity],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, Infinity],
  [Infinity, Infinity, 1, 1, 0, 2],
  [Infinity, Infinity, 5, Infinity, 2, 0]
];

const visited = Array(map.length).fill(false);
let distance = [];

const findSmallestNode = () => {
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

const dijkstra = (start) => {
  distance = map.map((_, i) => map[start][i]);
  visited[start] = true;

  for (let i=0; i<distance.length - 2; i++) {

    const minIdx = findSmallestNode();
    visited[minIdx] = true;
    for (let k=0; k<distance.length; k++) {
      if (!visited[k] && distance[k] > distance[minIdx] + map[minIdx][k]) {
        distance[k] = distance[minIdx] + map[minIdx][k];
      }
    }
  }
};

dijkstra(0);

console.log(`result: ${distance.join(' ')}`);