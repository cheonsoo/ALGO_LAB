const start = new Date().getTime();

function solution(s1, s2) {
  if (s1 === s2) return s1;

  let s1_s2 = s1 + s2;
  for (let i=0; i<s1.length; i++) {
    if (s1.substring(s1.length - 1 - i) === s2.substring(0, 1 + i)) {
      const combined = s1.substring(0, s1.length - 1 - i) + s2;
      console.log('### combined (s1_s2): ', combined);
      s1_s2 = s1_s2.length > combined.length ? combined : s1_s2;
    }
  }

  let s2_s1 = s2 + s1;
  for (let i=0; i<s2.length; i++) {
    if (s2.substring(s2.length - 1 - i) === s1.substring(0, 1 + i)) {
      const combined = s2.substring(0, s2.length - 1 - i) + s1;
      console.log('### combined (s2_s1): ', combined);
      s2_s1 = s2_s1.length > combined.length ? combined : s2_s1;
    }
  }

  // 합친 문자열의 길이가 똑같을 때  사전 상  앞서는 문자열 리턴
  if (s1_s2.length === s2_s1.length)
    return s1_s2 < s2_s1 ? s1_s2 : s2_s1;
  else
    return s1_s2.length > s2_s1.length ? s2_s1 : s1_s2;
}

// const str1 = 'xyZA';
// const str2 = 'ABCxy';

// const str1 = 'AxA';
// const str2 = 'AyA';

// const str1 = 'A';
// const str2 = 'AB';

const str1 = 'A';
const str2 = 'aB';

const result = solution(str1, str2);
console.log(`### exe time: ${new Date().getTime() - start}, ### result: ${result}`);