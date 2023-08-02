const start = new Date().getTime();

function solution(n) {
  let original = n;
  let reversed = 0;
  while (original > 0) {
    const lastDigit = original % 10;
    reversed = reversed * 10 + lastDigit;
    original = parseInt(original / 10);

    console.log(`original: ${original}, reversed: ${reversed}`);
  }

  return n === reversed ? true : false;
}

const input = 12321;
// const input = 21453;

const result = solution(input);
console.log('### result: ', result);
console.log('### exe time: ', new Date().getTime() - start);