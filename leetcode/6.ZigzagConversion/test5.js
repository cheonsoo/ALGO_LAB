const getRowSize = (s, numRows) => {
  const totalLetters = s.length;
  const lettersInBetween = numRows - 2 < 0 ? 0 : numRows - 2;
  const neededMinColumns = lettersInBetween + 1;
  const lettersInASquare = numRows + lettersInBetween;
  const leftLetters = totalLetters % lettersInASquare;
  let additionalColumns;
  if (leftLetters === 0)
    additionalColumns = 0;
  else
    additionalColumns = leftLetters - numRows <= 0 ? 1 : leftLetters - numRows + 1;
  const neededColumns = parseInt(totalLetters / lettersInASquare) * neededMinColumns + additionalColumns;
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

  let letter = '';
  let x = 0, y = 0, idx = 0;
  let toggle = true;
  while (idx < s.length) {
    letter = s.charAt(idx);
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
const result = convert(s, numRows);
console.log('result', result);
