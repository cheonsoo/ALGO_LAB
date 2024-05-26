/*
Big O:

[
  [1,2,6,7,15,16],
  [3,5,8,14,17,26],
  [4,9,13,18,25,27],
  [10,12,19,24,28,33],
  [11,20,23,29,32,34],
  [21,22,30,31,35,36]
]
0 - 1 - 1 - 1 - 2 - 1 - 3 - 1 - 4 - 1 - 3 - 2 - 1 - 1 - 1

 1     2        3           4               5                      4                  3              2          1
[1] - [2, 3] - [4, 5, 6] - [7, 8, 9, 10] - [11, 12, 13, 14, 15] - [16, 17, 18, 19] - [20, 21, 22] - [23, 24] - [25]
*/

function initMap(N) {
  let map = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let k = 0; k < N; k++) {
      row[k] = 0;
    }
    map.push(row);
  }
  return map;
}

function initNumberSet(N) {
  let array = [];
  for (let i = 1; i <= N * N; i++) {
    array.push(i);
  }

  let numberSet = [];
  let idx = 0;
  for (let i = 0; i < N * 2 - 1; i++) {
    let set;
    if (i < N) {
      set = array.splice(0, ++idx);
    } else {
      set = array.splice(0, --idx);
    }

    /*
      when i == even number, go bottom at first
      when i == odd number, go right at first
     */
    if (i % 2 === 1) set.sort((a, b) => b - a); // order by DESC

    numberSet.push(set);
  }
  return numberSet;
}

function solution(N, r, c) {
  let map = initMap(N);

  let numberSet = initNumberSet(N);

  let x = 0;
  let y = -1;
  let direction = true; // true: up, false, down

  for (let i = 0; (len = numberSet.length), i < len; i++) {
    let set = numberSet[i];

    if (i < N) {
      x = 0;
      y = i;
      for (let k = 0; k < set.length; k++) {
        map[y--][x++] = set[k];
      }
    } else {
      x = parseInt(i - N) + 1;
      y = N - 1;
      for (let k = 0; k < set.length; k++) {
        map[y--][x++] = set[k];
      }
    }
  }

  // print map
  for (let i = 0; i < map.length; i++) {
    console.log(JSON.stringify(map[i]));
  }

  console.log(map[r-1][c-1]);
}

solution(5, 3, 2); // 9
// solution(6, 5, 4); // 29
// solution(6, 3, 2); // 9
// solution(10, 3, 2); // 9
// solution(10, 10 - 3 + 1, 10 - 2 + 1); // 9

// solution(10, 8, 9); // 9 => 10^2 - solution(5, 3, 2) + 1


console.log('### result: ', solution(100, 98, 98));