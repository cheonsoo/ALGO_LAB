/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  for (let row of matrix) {
    console.log(row);
  }
  console.log('===================');

  for (let a=0, len = matrix.length; a<len; a++) {
      for (let b=a+1; b<len; b++) {
          let temp = matrix[a][b];
          matrix[a][b] = matrix[b][a];
          matrix[b][a] = temp
      }
  }
  for (let row of matrix) {
    console.log(row);
  }
  console.log('===================');

  // return matrix.map(row => row.reverse());
  for (let row of matrix) {
    row.reverse();
  }

  return matrix;
};

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
const result = rotate(matrix);
console.log('result', result);
