/**
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 8]
]

대각선 = [
	[3, 2, 1],
	[6, 5, 4],
	[9, 8, 7]
]
 */
const rotateDiagonal = () => {
  const len = matrix.length - 1;
  for (let y=0; y<=len; y++) {
    const row = matrix[y];
    matrix[y] = row.reverse();
  }

  matrix.forEach(row => console.log(row.join(' ')));
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

rotateDiagonal();