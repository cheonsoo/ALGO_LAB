/**
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

역대각선 = [
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9]
]

y, x > m - y, m - x
0, 0 > 0, 0
0, 1 > 1, 0
0, 2 > 2, 0
 */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const antiDiagonal = () => {
  const len = matrix.length;
  const converted = [...Array(len)].map(() => Array(len).fill(0));

  for (let y=0; y<len; y++) {
    for (let x=0; x<len; x++) {
      converted[x][y] = matrix[y][x];
    }
  }

  return converted;
};

const result = antiDiagonal();
result.forEach(row => console.log(row.join(' ')));