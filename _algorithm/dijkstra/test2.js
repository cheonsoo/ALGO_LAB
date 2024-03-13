// 노드 간의 거리를 초기화
const graph = [
  [ Infinity, 1, Infinity, 2, Infinity ],
  [ 1, Infinity, 3, Infinity, 2 ],
  [ Infinity, 3, Infinity, Infinity, 1 ],
  [ 2, Infinity, Infinity, Infinity, 2 ],
  [ Infinity, 2, 1, 2, Infinity ]
]

// 방문 여부를 기록할 배열 생성
const visited = Array(N).fill(false);

// 1번 노드로부터 각 노드까지의 최단 거리를 저장한 배열 생성
const dist = visited.map((_, i) => graph[0][i]);

// 방문하지 않았으면서 거리 테이블에서 가장 작은 값을 가진 노드 탐색
const findSmallestNode = (visited, distance) => {
    let minDist = Infinity;
    let minIdx = 0;
    for (let i = 0; i < distance.length; i++) {
        if (visited[i]) continue ;
        if (distance[i] < minDist) {
            minDist = distance[i];
            minIdx = i;
        }
    }
    return minIdx;
}

// 다익스트라 알고리즘 수행
const dijkstra = (graph, visited, dist) => {
		// 1번 노드는 거리를 0으로 설정하고, 방문한 것으로 처리
		distance[0] = 0;
    visited[0] = true;

		/*
			현재 방문한 노드는 거리 테이블 상에서 가장 거리가 짧은 값을 가진 노드.
			다음에 방문할 노드에 저장된 값이
			"현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"보다 크다면
			"현재 방문한 노드까지 누적 이동 거리 + 다음 노드까지 거리"를 거리 테이블의 다음 방문할 노드에 저장
		*/
    for (let i = 0; i < distance.length; i++) {
        const nodeIdx = findSmallestNode(visited, distance);
        visited[nodeIdx] = true;
        for (let j = 0; j < distance.length; j++) {
            if (visited[j]) continue ;
            if (distance[j] > distance[nodeIdx] + graph[nodeIdx][j])
                distance[j] = distance[nodeIdx] + graph[nodeIdx][j];
        }
    }
};