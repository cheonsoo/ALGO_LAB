var strStr = function(haystack, needle) {
  if (haystack.length === needle.length) {
    return haystack === needle ? 0 : -1;
  }

  let needleSize = needle.length;
  let index = -1;
  for (let a=0; a<=haystack.length - needleSize; a++) {

      let word = '';
      for (let b=a; b<a + needleSize; b++) {
          word += haystack.charAt(b);
      }

      if (needle === word) {
        index = a;
        break;
      }
  }
  return index;
};

// const haystack = "hello", needle = "ll"; // Output: 2
// const haystack = "aaaaa", needle = "bba"; // Output: -1
// const haystack = "a", needle = "a"; // Output: 0
// const haystack = "abc", needle = "c"; // Output: 0
const result = strStr(haystack, needle);
console.log('result', result);