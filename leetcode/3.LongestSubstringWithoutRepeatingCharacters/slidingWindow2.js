var lengthOfLongestSubstring = function (string) {
  if (string.length === 1) return 1;

  let longestStr = '';
  let currentStr = string.charAt(0);
  let i = 1;

  while (i <= string.length) {
    if (string.charAt(i) === '') break;

    let check = currentStr.indexOf(string.charAt(i));

    if (check >= 0) {
      currentStr = currentStr.substr(1);
    } else {
      currentStr += string.charAt(i);
      i++;
    }

    if (currentStr.length > longestStr.length) longestStr = currentStr;
  }

  console.log(currentStr);
  console.log(longestStr);

  return longestStr.length;
};
