/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const wall = 'w';
const direction = {
  right: 'r',
  left: 'l',
  down: 'd',
  up: 'u'
};

const isWall = (matrix, x, y) => {
  let flg = false;
  try {
    console.log(matrix[x][y]);
    if (matrix[x][y] === undefined || matrix[x][y] === wall) {
      flg = true;
    } else {
      flg = false;
    }
  } catch (e) {
    console.log(e);
    flg = true;
  }
  console.log('isWall: ', flg);
  return flg;
};

var spiralOrder = function (matrix) {
  const numLen = matrix.length * matrix[0].length;
  const result = [];
  let x = 0,
    y = 0;
  let idx = 0;
  let direct = direction.right; // l: left, r: right, u: up, d: down
  while (idx < numLen) {
    const current = matrix[x][y];
    console.log(`direct: ${direct}, x: ${x}, y: ${y}, current: ${current}`);

    result.push(current);
    matrix[x][y] = wall;

    if (direct === direction.right) {
      if (isWall(matrix, x, y + 1)) {
        direct = direction.down;
        x++;
      } else {
        y++;
      }
    } else if (direct === direction.left) {
      if (isWall(matrix, x, y - 1)) {
        direct = direction.up;
        x--;
      } else {
        y--;
      }
    } else if (direct === direction.up) {
      if (isWall(matrix, x - 1, y)) {
        direct = direction.right;
        y++;
      } else {
        x--;
      }
    } else {
      if (isWall(matrix, x + 1, y)) {
        direct = direction.left;
        y--;
      } else {
        x++;
      }
    }

    /*
         if (direction === 'r') {
             if (matrix[x][y + 1] === wall || matrix[x][y + 1] === undefined) {
                 direction = 'd';
                 x++;
             } else {
                 y++
             }
         } else if (direction === 'l') {
             if (matrix[x][y - 1] === wall || matrix[x][y - 1] === undefined) {
                 direction = 'u';
                 x--;
             } else {
                 y--;
             }
         } else if (direction === 'u') {
             if (matrix[x - 1][y] === wall || matrix[x - 1][y] === undefined) {
                 direction = 'r';
                 y++;
             } else {
                 x--;
             }
         } else {
             if (matrix[x + 1][y] === wall || matrix[x + 1][y] === undefined) {
                 direction = 'l';
                 y--;
             } else {
                 x++;
             }
         }
         */

    idx++;
  }

  console.log(result);

  return result;
};

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const result = spiralOrder(input);
console.log('result', result);
