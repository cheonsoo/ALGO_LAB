const start = new Date().getTime();

function solution(s1, s2) {
  const strs = [];

  let s1_s2 = '';
  for (let i=s1.length; i>=0; i--) {
    for (let k=0; k<s2.length; k++) {
      if (s1.charAt(i) === s2.charAt(k)) {
        s1_s2 = s1.substring(0, s1.length - k) + s2;
      } else {
        break;
      }
    }
  }

  console.log(s1_s2);

  return null;
}

const str1 = 'xyZA';
const str2 = 'ABCxy';

const result = solution(str1, str2);
console.log(`### exe time: ${new Date().getTime() - start}, ### result: ${result}`);