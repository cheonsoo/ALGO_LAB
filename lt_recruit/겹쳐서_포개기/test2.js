const start = new Date().getTime();

function solution(s1, s2) {
  const strs = [];

  let s1_s2 = 'initial';
  for (let i=0; i<s1.length; i++) {
    if (s1.charAt(s1.length - 1 - i) === s2.charAt(i)) {
      s1_s2 = s1.substring(0, s1.length - 1 - i) + s2;
    } else {
      break;
    }
  }

  console.log('### s1_s2: ', s1_s2);

  return null;
}

const str1 = 'xyZAB';
const str2 = 'ABCxy';

const result = solution(str1, str2);
console.log(`### exe time: ${new Date().getTime() - start}, ### result: ${result}`);