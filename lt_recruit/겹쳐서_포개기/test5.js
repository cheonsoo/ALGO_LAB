const start = new Date().getTime();

function getCombinedString(str1 = '', str2 = '') {
  let combined = str1 + str2;
  for (let i=0; i<str1.length; i++) {
    if (str1.substring(str1.length - 1 - i) === str2.substring(0, 1 + i)) {
      const str1_str2 = str1.substring(0, str1.length - 1 - i) + str2;
      combined = combined.length > str1_str2.length ? str1_str2 : combined;
    }
  }
  return combined;
}

function solution(s1, s2) {
  if (s1 === s2) return s1;

  const s1_s2 = getCombinedString(s1, s2);
  console.log('### s1_s2: ', s1_s2);

  let s2_s1 = getCombinedString(s2, s1);
  console.log('### s2_s1: ', s2_s1);

  // 합친 문자열의 길이가 똑같을 때  사전 상  앞서는 문자열 리턴
  if (s1_s2.length === s2_s1.length)
    return s1_s2 < s2_s1 ? s1_s2 : s2_s1;
  else
    return s1_s2.length > s2_s1.length ? s2_s1 : s1_s2;
}

// const str1 = 'xyZA';
// const str2 = 'ABCxy';

const str1 = 'xyZABC';
const str2 = 'ABCxy';

// const str1 = 'AxA';
// const str2 = 'AyA';

// const str1 = 'A';
// const str2 = 'AB';

// const str1 = 'A';
// const str2 = 'aB';

const result = solution(str1, str2);
console.log(`### exe time: ${new Date().getTime() - start}, ### result: ${result}`);