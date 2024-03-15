/**
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

역대각선 = [
	[7, 8, 9]
	[4, 5, 6]
	[1, 2, 3]
]

[y, x] > [m-y, x]
 */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const antiDiagonal = () => {
  const converted = [...Array(matrix.length)].map(() => Array(matrix.length).fill(0));
  const m = matrix.length - 1;

  for (let y=0; y<=m; y++) {
    for (let x=0; x<=m; x++) {
      converted[m - y][x] = matrix[y][x];
    }
  }

  converted.forEach(row => console.log(row.join(' ')));
};

antiDiagonal();