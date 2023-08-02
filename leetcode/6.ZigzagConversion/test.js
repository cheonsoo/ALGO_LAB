/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


/*
[
  [1,2,3,4,5]
  [6,7,8,9,10]
  [11,12,13,14,15]
  [16,17,18,19,20]
]

글자수: 14
row 수: 4

7X4 Array
행과 행 사이의 글자수 = (Row 수 - 2)
(Row 수 + 2) * N = 행 시작
글자의 위치 = (Row의 수 + ) * Y축 Idx



P의 위치 = (4 + 2) * 0 + 0 = 0

A: (4+2)*1+5
[
  ["P", "", "", "I", "", "", "N"]
  ["A", "", "L", "S", "", "I", "G"]
  ["Y", "A - 16", "", "H", "R", "", ""]
  ["P", "", "", "I", "", "", ""]
]
(0, 0) - (1, 0) - (2, 0) - (3, 0) -
(1, 2) -
(2, 1) - 
(3, 0) - (3, 1) - (3, 2) - (3, 3) -
(4, 2) -
(5, 1) - 
(6, 0) - (6, 1)
*/
var convert = function(s, numRows) {

};

const s = "PAYPALISHIRING", numRows = 3; // Output: "PAHNAPLSIIGYIR"
// const s = "PAYPALISHIRING", numRows = 4; // Output: "PINALSIGYAHRPI"
/*
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
*/
// const s = "A", numRows = 1; // Output: "A"
const result = convert(s, numRows);
console.log('result', result);
