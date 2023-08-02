const start = new Date().getTime();

function solution(n) {
  const converted = n.toString().split('').reverse().join('');
  return n.toString() === converted ? true : false;
}

// const input = 12321;
// const input = 21453;
const input = '123456789123456789123456789123456789123456789987654321987654321987654321987654321987654321';

const result = solution(input);
console.log('### result: ', result);
console.log('### exe time: ', new Date().getTime() - start);