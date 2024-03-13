/*
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

// 1 - 2 - 3 - 4 - [5, 6] - 7 - 8, 9, 10 - 11 - 12, 13, 14, 15 - 16 - 17, 18, 19 - 20 - 21, 22 - 23 - 24 - 25
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
  let toggle = true; // true -> go up
  for (let i = 0; i < N * 2 - 1; i++) {
    let set;
    if (i < N) {
      set = array.splice(0, ++idx);
    } else {
      set = array.splice(0, --idx);
    }

    // toggle
    if (!toggle) set.sort((a, b) => b - a);
    toggle = !toggle;
    numberSet.push(set);
  }
  return numberSet;
}

/*
function initArray(N) {
  let cnt = 1;
  let array = [];
  for (let i = 1; i < N * 2; i++) {
    let inner = [];
    if (i < N + 1) {
      for (let k = 0; k < i; k++) {
        inner.push(cnt++);
      }
    } else {
      for (let k = i - 2; k >= 0; k--) {
        inner.push(cnt++);
      }
    }

    array.push(inner);
    inner = [];
  }
}
*/

function solution(N) {
  let map = initMap(N);

  let numberSet = initNumberSet(N);

  // console.log(JSON.stringify(numberSet));

  let x = 0;
  let y = 0;
  let direction = 'up';
  for (let i = 0; (len = numberSet.length), i < len; i++) {
    console.log(JSON.stringify(numberSet[i]));
    let set = numberSet[i];

    for (let k = 0; k < set.length; k++) {
      map[x][y] = set[k];
    }
  }
}

solution(5);
