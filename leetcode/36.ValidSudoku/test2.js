/**
 * @param {character[][]} board
 * @return {boolean}
 */

/*
// x = parseInt(i/3)*3
// y = x % 3 * 3
i = 4
x = parseInt(i/3)*3
y = x / 3 * 3
console.log('x: ', x);
console.log('y: ', y);
*/
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
  
  var isValidSudoku = function(board) {
      let flg = true;
      let len = board.length;
      for (let i=0; i<len; i++) {
          
          // Row Check
          let arr = [];
          let set = new Set();
          for (let k=0; k<len; k++) {
              if (board[i][k] !== '.') {
                  arr.push(board[i][k]);
                  set.add(board[i][k]);
              }
          }
          if (arr.length !== set.size) {
              console.log('row invalid');
              flg = false;
              break;
          }
          
          // Column Check
          arr = [];
          set = new Set();
          for (let t=0; t<len; t++) {
              if (board[t][i] !== '.') {
                  arr.push(board[t][i]);
                  set.add(board[t][i]);
              }
          }
          if (arr.length !== set.size) {
              console.log(arr);
              console.log(set);
              console.log('column invalid');
              flg = false;
              break;
          }
          
          // Sub-box Check
          arr = [];
          set = new Set();
          for (let x=map[`${i}`].x; x<map[`${i}`].x+3; x++) {
              for (y=map[`${i}`].y; y<map[`${i}`].y+3; y++) {
                  if (board[x][y] !== '.') {
                      arr.push(board[x][y]);
                      set.add(board[x][y]);
                  }
              }
          }
          if (arr.length !== set.size) {
              console.log(arr);
              console.log(set);
              console.log('sub-box invalid');
              flg = false;
              break;
          }
      }
      
      return flg;
  };