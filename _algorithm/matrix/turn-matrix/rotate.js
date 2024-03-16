/*
90 도 회전
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 8]
]

[
	[7, 4, 1],
	[8, 5, 2],
	[9, 6, 3]
]

/*
0, 0 > 0, 2
0, 1 > 1, 2
0, 2 > 2, 2

1, 0 > 0, 1
1, 1 > 1, 1
1, 2 > 2, 1

2, 0 > 0, 0
2, 1 > 1, 0
2, 2 > 2, 0

// y, x > x, m-y
*/
const rotate90 = () => {
  const converted = [...Array(matrix.length)].map(() => Array(matrix.length).fill(0));
  const m = matrix.length - 1;
  for (let y=0; y<=m; y++) {
    for (let x=0; x<=m; x++) {
      // console.log(`[${y}, ${x}] -> [${x}, ${m - y}]`);
      converted[x][m - y] = matrix[y][x];
    }
  }

  converted.forEach(row => console.log(row.join(' ')));
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// console.log('----------');
// matrix.forEach(row => console.log(row.join(' ')));
// console.log('----------');

rotate90(matrix);