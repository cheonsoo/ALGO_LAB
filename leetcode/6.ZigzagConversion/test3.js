/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*
[
  ["P", "", "", "I", "", "", "N"]
  ["A", "", "L", "S", "", "I", "G"]
  ["Y", "A - 16", "", "H", "R", "", ""]
  ["P", "", "", "I", "", "", ""]
]

(0, 0) - (1, 0) - (2, 0) - (3, 0) -
(2, 1) -
(1, 2) - 
(0, 3) - (1, 3) - (2, 3) - (3, 3) -
(2, 3) -
(1, 5) - 
(0, 6) - (1, 6)


NumCols = StrLen

로우수 4
필요한 단일글자수 = 로우수 - 2 = 2
컬럼수 로우수 - 1


const numRows = 4;
const totalLetters = 14;
const neededMinColumns = 3;
const neededMaxColumns = 2;
const lettersInASquare = 6;
const leftLetters = 2;
const additionalColumns = leftLetters - numRows < 0 && 1;



const s = 'PAYPALISHIRING';
const numRows = 4;
const totalLetters = s.length;
const lettersInBetween = numRows - 2;
const neededMinColumns = lettersInBetween + 1;
// const neededMaxColumns = parseInt(totalLetters / neededMinColumns);
const lettersInASquare = numRows + lettersInBetween;
const leftLetters = totalLetters % lettersInASquare;
const additionalColumns = leftLetters - numRows <= 0 ? 1 : leftLetters - numRows + 1;
const neededColumns = parseInt(totalLetters / lettersInASquare) * neededMinColumns + additionalColumns;

console.log('totalLetters', totalLetters);
console.log('lettersInBetween', lettersInBetween);
console.log('neededMinColumns', neededMinColumns);
// console.log('neededMaxColumns', neededMaxColumns);
console.log('lettersInASquare', lettersInASquare);
console.log('leftLetters', leftLetters);
console.log('additionalColumns', additionalColumns);
console.log('neededColumns', neededColumns);
*/
const getRowSize = (s, numRows) => {
  const totalLetters = s.length;
  const lettersInBetween = numRows - 2 < 0 ? 0 : numRows - 2;
  const neededMinColumns = lettersInBetween + 1;
  // const neededMaxColumns = parseInt(totalLetters / neededMinColumns);
  const lettersInASquare = numRows + lettersInBetween;
  const leftLetters = totalLetters % lettersInASquare;
  // const additionalColumns = leftLetters - numRows <= 0 ? 1 : leftLetters - numRows + 1;
  let additionalColumns;
  if (leftLetters === 0)
    additionalColumns = 0;
  else
    additionalColumns = leftLetters - numRows <= 0 ? 1 : leftLetters - numRows + 1;
  const neededColumns = parseInt(totalLetters / lettersInASquare) * neededMinColumns + additionalColumns;
  console.log('neededColumns', neededColumns);
  return neededColumns;
};

const initMatrix = (s, numRows) => {
  let matrix = [];
  let rowSize = getRowSize(s, numRows);
  for (let i=0; i<numRows; i++) {
    const row = [];
    for (let k=0; k<rowSize; k++) {
      row.push('');
    }
    matrix.push(row);
  }
  return matrix;
};

var convert = function(s, numRows) {
  if (numRows === 1 || s.lenggh === numRows) {
    return s;
  }


  const matrix = initMatrix(s, numRows);
  console.log(matrix);

  let letter = '';
  let x = 0, y = 0, idx = 0;
  let toggle = true;
  while (idx < s.length) {

    letter = s.charAt(idx);
    console.log(`${letter}: (${y}, ${x})`);

    matrix[y][x] = letter;

    if (y === numRows  - 1)
      toggle = false;
    if (y === 0)
      toggle = true;

    if (toggle)
      y++;
    else {
      y--;
      x++;
    }

    idx++;
  }

  let result = '';
  for (let i=0; i<matrix.length; i++) {
    for (let k=0; k<matrix[i].length; k++) {
      result += matrix[i][k];
    }
  }

  return result;
};

// const s = "PAYPALISHIRING", numRows = 3; // Output: "PAHNAPLSIIGYIR"
// const s = "PAYPALISHIRING", numRows = 4; // Output: "PINALSIGYAHRPI"
// const s = "ABC", numRows = 2; // Output: "PINALSIGYAHRPI"
// const s = "ABCD", numRows = 2; // Output: "PINALSIGYAHRPI"
const s = "AB", numRows = 1; // Output: "PINALSIGYAHRPI"
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
