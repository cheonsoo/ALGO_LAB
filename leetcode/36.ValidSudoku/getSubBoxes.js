/*
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
*/
/*
// x = parseInt(i/3)*3
// y = x % 3 * 3
i = 4
x = parseInt(i/3)*3
y = x / 3 * 3
console.log('x: ', x);
console.log('y: ', y);

let map = {
  '0': { x: 0, y: 0 },
  '1': { x: 0, y: 3 },
  '2': { x: 0, y: 6 },
  '3': { x: 3, y: 0 },
  '4': { x: 3, y: 3 },
  '5': { x: 3, y: 6 },
  '6': { x: 6, y: 0 },
  '7': { x: 6, y: 3 },
  '8': { x: 6, y: 6 }
};
*/
for (let i=0; i<9; i++) {

  console.log('==================================');
  const area = parseInt(i/3) * 3;
  console.log('area: ', area);
  for (let x=area; x<area+3; x++) {

    // for (y=x % 3 * 3; y<x % 3 * 3 + 3; y++) {
    // for (y=x % 3 * 3, len=x % 3 * 3 + 3; y<len; y++) {
    for (y=parseInt(x%3) * 3, len=parseInt(x%3) * 3 + 3; y<len; y++) {
        console.log(`[${x}][${y}]`);
    }
  }
}
