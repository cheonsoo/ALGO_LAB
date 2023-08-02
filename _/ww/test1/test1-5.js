// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  
  // 상수
  const good = '.';
  const bad = 'X';

  let count = 0;
  // while 문 돌면서 . 있을 경우 pass
  // S 값이 없을 때까지 Loop
  while(S) {

    // X 가 없을 경우 break
    if (S.indexOf(bad) === -1)
      break;

    // . 일 경우 pass
    if (S.charAt(0) === good) {
      S = S.slice(1);
      continue;
    }

    // 여기까지 넘어온 경우는 X 이므로 세칸 수리. 수리된 칸은 제거하여 다음 Loop 에서 처음부터 다시 시작
    S = S.slice(3);

    // 수리 카운트 +1
    count++;
  }

  // result 수리카운트
  return count;
}

const S = 'X..X..X..X..'; // 4
// const S = '..X..X..X..X'; // 4
// const S = '..X.X.X.X'; // 2
// const S = '.....................................................................XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// const S = 'X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..X..';
const result = solution(S);
console.log(result);