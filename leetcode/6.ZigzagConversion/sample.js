var convert = function(s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;

  const rowI = numRows - 1;

  const arr = s.slice(0, rowI + 1).split("");
  console.log(arr);
  let reserve = false;

  for (let i = numRows; i < s.length; i++) {
      if (i % rowI === 0) {
          !reserve ? (arr[0] += s[i]) : (arr[rowI] += s[i]);
          reserve = !reserve;
      } else {
        reserve ? (arr[i % rowI] += s[i]) : (arr[rowI - (i % rowI)] += s[i]);
      }
  }

  return arr.join("");
};

// const s = "PAYPALISHIRING", numRows = 3; // Output: "PAHNAPLSIIGYIR"
const s = "PAYPALISHIRING", numRows = 4; // Output: "PINALSIGYAHRPI"
// const s = "ABC", numRows = 2; // Output: "PINALSIGYAHRPI"
// const s = "ABCD", numRows = 2; // Output: "PINALSIGYAHRPI"
// const s = "AB", numRows = 1; // Output: "PINALSIGYAHRPI"
const result = convert(s, numRows);
console.log('result: ', result);