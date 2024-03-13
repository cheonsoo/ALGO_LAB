const INF = Infinity;
const arr = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0]
];

function solution(start) {
  for (let k = 0; k < arr.length; k++) {
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr.length; y++) {
        arr[x][y] = Math.min(arr[x][y], arr[x][k] + arr[k][y]);
      }
    }
  }

  console.log(arr);
}

const result = solution();
console.log(`### result: ${result}`);
