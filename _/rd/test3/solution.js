/*
[
  [1,2,6,7,15,16],
  [3,5,8,14,17,26],
  [4,9,13,18,25,27],
  [10,12,19,24,28,33],
  [11,20,23,29,32,34],
  [21,22,30,31,35,36]
]
1, 2,
*/
function solution(n, r, c) {
  // 배열 초기화
  let map = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let k = 0; k < n; k++) {
      row[k] = 0;
    }
    map.push(row);
  }

  let x = 0;
  let y = -1;
  let direction = ''; // 위, 아래 방향
  let cnt = 1;
  let total = n * n; // 배열 총 크기

  while (cnt <= total) {
    // 원하는 위치에 도달하면 loop 종료
    // if (y === r - 1 && x === c - 1) {
    //   result = cnt - 1;
    //   break;
    // }

    // 오른쪽 끝
    if (x === n - 1 && cnt <= total) {
      map[++y][x] = cnt++;
      direction = 'down';
    }

    // 바닥 끝
    if (y === n - 1 && cnt <= total) {
      map[y][++x] = cnt++;
      direction = 'up';
    }

    // 위쪽 끝
    if (y === 0 && cnt <= total) {
      map[y][++x] = cnt++;
      direction = 'down';
    }

    // 왼쪽 끝
    if (x === 0 && cnt <= total) {
      map[++y][x] = cnt++;
      direction = 'up';
    }

    // 방향이 위로 갈 때
    if (direction === 'up' && x !== n - 1 && y !== 0 && cnt <= total) {
      map[--y][++x] = cnt++;
    }

    // 방향이 아래로 갈 때
    if (direction === 'down' && y !== n - 1 && x !== 0 && cnt <= total) {
      map[++y][--x] = cnt++;
    }
  }

  // print map
  for (let i = 0; i < map.length; i++) {
    console.log(JSON.stringify(map[i]));
  }

  return map[r - 1][c - 1];
}

//   const result = solution(5, 3, 2); // 9
// const result = solution(6, 5, 4); // 29
const result = solution(20, 5, 4); // 29

console.log(result);
