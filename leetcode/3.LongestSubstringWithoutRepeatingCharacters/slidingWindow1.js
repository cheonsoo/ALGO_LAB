var lengthOfLongestSubstring = function (string) {
  if (string.length === 1) return 1;

  let strs = string.split('');

  let longestStr = [];
  let currentStr = [strs[0]];
  let i = 1;

  while (i <= string.length) {
    if (strs[i] === undefined) break;

    let check = currentStr.indexOf(strs[i]);

    if (check >= 0) {
      currentStr.shift();
    } else {
      currentStr.push(strs[i]);
      i++;
    }

    if (currentStr.length > longestStr.length) longestStr = currentStr.slice(0);
  }

  console.log(currentStr);
  console.log(longestStr.join(''));

  return longestStr.length;
};
