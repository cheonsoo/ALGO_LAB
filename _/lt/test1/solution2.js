/**
### Result ###
[1,2,6,7,15,16,28,29,45,46]
[3,5,8,14,17,27,30,44,47,64]
[4,9,13,18,26,31,43,48,63,65]
[10,12,19,25,32,42,49,62,66,79]
[11,20,24,33,41,50,61,67,78,80]
[21,23,34,40,51,60,68,77,81,90]
[22,35,39,52,59,69,76,82,89,91]
[36,38,53,58,70,75,83,88,92,97]
[37,54,57,71,74,84,87,93,96,98]
[55,56,72,73,85,86,94,95,99,100]

### result: 33
### exe time: 4
 */
const start = new Date().getTime();

/*
 * Big O: N^2
 */
function getZigZagMap(n) {
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
  while (cnt <= total) {
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

  return map;
}

function printZigZagMap(map) {
  for (let i = 0; i < map.length; i++) {
    console.log(JSON.stringify(map[i]));
  }
}

function solution(N, X, Y) {
  let map = getZigZagMap(N);
  printZigZagMap(map);
  console.log(`### result: ${map[Y - 1][X - 1]}`); // return value in [r, c]
}

// solution(5, 3, 2); // 9
solution(10, 4, 5); // 29

console.log(`### exe time: ${new Date().getTime() - start}`);
