function solution(n, r, c) {
  /*
  [
    [1,2,6,7,15,16],
    [3,5,8,14,17,26],
    [4,9,13,18,25,27],
    [10,12,19,24,28,33],
    [11,20,23,29,32,34],
    [21,22,30,31,35,36]
  ]
   */
  let x = 0;
  let y = -1;
  let direction = "";
  let map = [];
  for (let i=0; i<n; i++) {
    let row = [];
    for (let k=0; k<n; k++) {
      row[k] = -1;
    }
    map.push(row);
  }

  let cnt = 1;
  let total = n * n; // 전체 칸 수

  while(cnt <= total) {
    if (x === n - 1 && cnt <= total) {
      map[++y][x] = cnt++;
      direction = "down";
    }

    if (y === n-1 && cnt <= total) {
      map[y][++x] = cnt++;
      direction = "up";
    }

    if (y == 0 && cnt <= total) {
      map[y][++x] = cnt++;
      direction = "down";
    }

    if (x === 0 && cnt <= total) {
      map[++y][x] = cnt++;
      direction = "up";
    }


    if (direction === "up" && x !== n-1 && y !== 0 && cnt <= total) {
      map[--y][++x] = cnt++;
    }

    if (direction === "down" && y !== n-1 && x !== 0 && cnt <= total) {
      map[++y][--x] = cnt++;
    }
  }

  return map[r-1][c-1];
}

// const result = solution(5, 3, 2); // 9
const result = solution(6, 5, 4); // 29

console.log(result);