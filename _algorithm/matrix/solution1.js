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

### result: 68
### exe time: 5
*/
const start = new Date().getTime();

// Big O: O(N^2) = N X N
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

/*
[1]
[3,2]
[4,5,6]
[10,9,8,7]
[11,12,13,14,15]
[21,20,19,18,17,16]
[22,23,24,25,26,27,28]
[36,35,34,33,32,31,30,29]
[37,38,39,40,41,42,43,44,45]
[55,54,53,52,51,50,49,48,47,46]
[56,57,58,59,60,61,62,63,64]
[72,71,70,69,68,67,66,65]
[73,74,75,76,77,78,79]
[85,84,83,82,81,80]
[86,87,88,89,90]
[94,93,92,91]
[95,96,97]
[99,98]
[100]

Big O: O(N) = 2N - 1
*/
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

    /*
      when i == even number, go bottom at first
      when i == odd number, go right at first
     */
    if (i % 2 === 1) set.sort((a, b) => b - a); // order by DESC

    numberSet.push(set);
  }

  for (let i = 0; i < numberSet.length; i++) {
    console.log(JSON.stringify(numberSet[i]));
  }

  return numberSet;
}

/*
 * Big O: O(N^2) = N X N
 *
 * N + 2(N - 1) + 2(N - 2) + ... + 2(N - (N - 1))
 * ex) 5일 경우
 * 5 + 2*(5 - 1) + 2*(5 - 2) + 2*(5 - 3) + 2*(5 - 4) = 25
 */
function getZigZagMap(N, map, numberSet) {
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

  return map;
}

function printZigZagMap(map) {
  for (let i = 0; i < map.length; i++) {
    console.log(JSON.stringify(map[i]));
  }
}

// Big O: O(N^2)
function solution(N, X, Y) {
  let map = initMap(N);
  let numberSet = initNumberSet(N);
  map = getZigZagMap(N, map, numberSet);
  printZigZagMap(map);
  return map[X][Y];
}

let result = solution(10, 5, 6);
console.log(`### result: ${result}`);
console.log(`### exe time: ${new Date().getTime() - start}`);
