/**
 * 1. Concept
 * - dijkstra (선형탐색))
 * - dp
 *
 * 2. Time Complexity
 * - O(N^2)
 *
 * 3. Data Structure
 * - map<int><int>[][]: 맵
 * - visited<bool>[]: 방문한 노드
 * - distance<int>[]: 최단거리
 *
 */
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
        if (distance[i] < minDistance && !visited[i]) {
            minDistance = distance[i];
            minIndex = i;
        }
    }

    return minIndex;
};

const dijkstra = (start) => {
    distance = map.map((_, i) => map[start][i]);
    visited[start] = true;

    for (let i=0; i<map.length - 2; i++) {
        const smallestNodeIndex = findSmallestNode();
        visited[smallestNodeIndex] = true;

        for (let k=0; k<map.length; k++) {
            if (!visited[k] && distance[k] > distance[smallestNodeIndex] + map[smallestNodeIndex][k]) {
                distance[k] = distance[smallestNodeIndex] + map[smallestNodeIndex][k];
            }
        }
    }
};

dijkstra(1);

console.log(distance.join(' '));