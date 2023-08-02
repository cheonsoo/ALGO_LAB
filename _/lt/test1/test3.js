function solution(n, r, c) {
  // init 2 dimension arrays and set value as 0
  let map = [];
  for (let i=0; i<n; i++) {
    let row = [];
    for (let k=0; k<n; k++) {
      row[k] = 0;
    }
    map.push(row);
  }

  let x = 0;
  let y = -1;
  let direction = ""; // directions to go up or down
  let cnt = 1; // starter
  let total = n * n; // total number of 2 dimension arrays

  // terminate loop if cnt meets total
  while(cnt <= total) {
    // right end
    if (x === n - 1 && cnt <= total) {
      map[++y][x] = cnt++;
      direction = "down";
    }

    // bottom end
    if (y === n-1 && cnt <= total) {
      map[y][++x] = cnt++;
      direction = "up";
    }

    // top end
    if (y === 0 && cnt <= total) {
      map[y][++x] = cnt++;
      direction = "down";
    }

    // left end
    if (x === 0 && cnt <= total) {
      map[++y][x] = cnt++;
      direction = "up";
    }

    // when direction is up
    if (direction === "up" && x !== n-1 && y !== 0 && cnt <= total) {
      map[--y][++x] = cnt++;
    }

    // when direction is down
    if (direction === "down" && y !== n-1 && x !== 0 && cnt <= total) {
      map[++y][--x] = cnt++;
    }
  }

  return BigInt(map[r-1][c-1]); // return value in [r, c]
}

const result = solution(5, 3, 2); // 9
// const result = solution(6, 5, 4); // 29

console.log(result);