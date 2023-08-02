// 5 0 3
//
// desc : 5
// src : 0
// size : 3
// [ 0, 255, 123, 12, 2, 4, 12,  4,   55, 2 ]
// [ 0, 255, 123, 12, 2, 0, 255, 123, 55, 2 ]
//
// Time Complexity (Big O): O(N)
function memcpy(v, dest, src, size) {
  let copied = v.slice(src, src + size);
  for (let i=dest; i<dest+size; i++) {
    v[i] = copied.shift();
  }
  return v;
}

let arr = [0, 255, 123, 12, 2, 4, 12, 4, 55, 2];
let result = memcpy(arr, 5, 0, 3); // v, dest, src, size
console.log(result.join(' '));
