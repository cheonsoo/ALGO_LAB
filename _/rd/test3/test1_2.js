function trackZigzag(n, r, c) {
  // init 2 dimension arrays and set value as 0
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
  let direction = ''; // directions to go up or down
  let cnt = 1; // starter
  let total = n * n; // total number of 2 dimension arrays

  // terminate loop if cnt meets total
  let result = -1;
  while (cnt <= total) {
    if (y === r - 1 && x === c - 1) {
      result = cnt - 1;
      break;
    }

    // right end
    if (x === n - 1 && cnt <= total) {
      map[++y][x] = cnt++;
      direction = 'down';
    }

    // bottom end
    if (y === n - 1 && cnt <= total) {
      map[y][++x] = cnt++;
      direction = 'up';
    }

    // top end
    if (y === 0 && cnt <= total) {
      map[y][++x] = cnt++;
      direction = 'down';
    }

    // left end
    if (x === 0 && cnt <= total) {
      map[++y][x] = cnt++;
      direction = 'up';
    }

    // when direction is up
    if (direction === 'up' && x !== n - 1 && y !== 0 && cnt <= total) {
      map[--y][++x] = cnt++;
    }

    // when direction is down
    if (direction === 'down' && y !== n - 1 && x !== 0 && cnt <= total) {
      map[++y][--x] = cnt++;
    }
  }

  if (result === -1)
    result = map[r - 1][c - 1]; // return value in [r, c]

  // print map
  for (let i = 0; i < map.length; i++) {
    console.log(JSON.stringify(map[i]));
  }

  return result;
}

function solution(n, r, c) {
  if (r > n / 2 && c > n / 2) {
    return n ** 2 - trackZigzag(Math.round(n), n - c + 1, n - r + 1);
    // return n^2 - trackZigzag(Math.round(n), r, c);
  }

  return trackZigzag(n, r, c);
}

// const result = solution(5, 3, 2); // 9
// const result = solution(6, 5, 4); // 29
console.log(solution(11, 8, 9)); // 9 => 10^2 - solution(5, 3, 2) + 1
// console.log(solution(Math.round(11/2), 11 - 9 + 1, 11 - 8 + 1)); 
// let num = solution(Math.round(11/2), 11 - 9 + 1, 11 - 8 + 1);
// console.log(11**2 - num); 

