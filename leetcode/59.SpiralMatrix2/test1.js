/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  // Validation
  if (n === 1) {
    return [[1]];
  } else if (n === 2) {
    return [[1,2], [4,3]];
  }

  const isWall = (x, y) => {
    try {
      if (x === -1 || y === -1) {
        return true;
      }

      if (matrix[y] && matrix[y][x] > 0) {
        return true;
      } else {
        if (x > n - 1 || y > n - 1) {
          return true;
        }
      }
    } catch (e) {
      console.log(e);
      return true;
    }

    return false;
  };

  let x = 0, y = 0, idx = 1;
  const matrix = [];
  for (let i=0; i<n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  console.log(matrix);

  let direction = 'right';
  while (idx <= n*n) {
    if (direction === 'right') {
      matrix[y][x] = idx;

      if (isWall(x + 1, y)) {
        direction = 'bottom';
        y++;
      } else {
        x++;
      }
    } else if (direction === 'bottom') {
      matrix[y][x] = idx;

      if (isWall(x, y + 1)) {
        direction = 'left';
        x--;
      } else {
        y++;
      }
    } else if (direction === 'left') {
      matrix[y][x] = idx;

      if (isWall(x - 1, y)) {
        direction = 'up';
        y--;
      } else {
        x--;
      }
    } else {
      matrix[y][x] = idx;

      if (isWall(x, y - 1)) {
        direction = 'right';
        x++;
      } else {
        y--;
      }
    }

    idx++;
  }

  console.log(matrix);

  return matrix;
};

const n = 5;
const result = generateMatrix(n);
console.log(`### result: ${result}`);
