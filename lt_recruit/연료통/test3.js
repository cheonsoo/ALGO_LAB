const start = new Date().getTime();

const INF = Infinity;
const map = [
  [0, 7, INF, 8, 15],
  [7, 0, 10, 6, 5],
  [INF, 10, 0, INF, INF],
  [8, 6, INF, 0, 6],
  [15, 5, INF, 6, 0],
];
const map2 = [];

/*
플로이드 워셜 알고리즘 이용
*/
function solution(n, route) {

  for (let k=0; k<map.length; k++) {
    for (let x=0; x<map.length; x++) {
      for (let y=0; y<map.length; y++) {
        map[x][y] = Math.min(map[x][y], map[x][k] + map[k][y]);
        // map2[x][y] =
      }
    }
  }

  console.log(map);
};

// const n = 3; // result: 2
// const route = [[1, 2, 1], [1, 3, 4], [2, 3, 2]];

// const n = 5, route = [[5, 1, 15], [4, 2, 6], [1, 4, 8], [3, 2, 10], [1, 2, 7], [5, 4, 6], [2, 5, 5]]; // Result: 7

const n = 31, route = [2,23,22,7,5,3];
// const n = 11, route = [3,2,4,5,8];

const result = solution(n, route);
console.log(`### [exe time: ${new Date().getTime() - start} ms] result: ${result}`);
