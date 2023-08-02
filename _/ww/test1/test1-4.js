// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const good = '.';
  let result = [];

  while (S && S.length >= 0) {
    const current = S.charAt(0);
    if (current === good) {
      S = S.substr(1); // Remove first character if it's good and proceed
      continue;
    }

    const toBeFixed = S.substr(0, 3); // Get the area to be fixed on the road
    result.push(toBeFixed); // Push in the array to calculate total times to fix
    S = S.replace(toBeFixed, ''); // Remove the first matched area already calculated on the road
  }

  return result.length;
}

// const S = 'X..X..X..X..';
// const S = '..X..X..X..X';
// const S = '..X.X.X.X';
// const S = '.....................................................................XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const S = 'X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..';
const result = solution(S);
console.log(result);