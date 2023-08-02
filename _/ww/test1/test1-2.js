// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const good = '.';
  const bad = 'X';
  let result = [];

  while (S && S.length >= 0) {
    const current = S.charAt(0);
    if (current === good) {
      S = S.substr(1);
      continue;
    }

    result.push(S.substr(0, 3));
    S = S.substr(3);
  }

  return result.length;
}
