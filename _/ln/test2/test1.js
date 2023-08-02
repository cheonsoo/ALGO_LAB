// 5 0 3
//
// desc : 5
// src : 0
// size : 3
// [ 0, 255, 123, 12, 2, 4, 12,  4,   55, 2 ]
// [ 0, 255, 123, 12, 2, 0, 255, 123, 55, 2 ]
//
// Time Complexity (Big O): O(N)
var arr = [0, 255, 123, 12, 2, 4, 12, 4, 55, 2];

function memcpy(v, dest, src, size) {
  if (size < 1 || src < 1 || dest > src) {
    // 1
    return;
  }

  for (let i = src; i <= src + size - 1; i++) {
    // src + src + 1 + ... + src + size - 1
    v[i + dest] = v[i]; // src + src + 1 + ... + src + size - 1
  }

  return v;
}

const result = memcpy(arr, 5, 0, 3);
console.log(result.join(', '));
