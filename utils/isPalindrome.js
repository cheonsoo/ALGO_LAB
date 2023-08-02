const isPalindrome = str => {
  let flg = true;
  for (let i = 0, len = str.length / 2; i < len; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      flg = false;
      break;
    }
  }
  return flg;
};

console.log(isPalindrome("abcba"));