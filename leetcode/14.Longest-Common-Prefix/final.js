/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  const shortestLen = strs.sort((a, b) => a.length - b.length)[0].length;

let hasPrefix = false;
let lastPrefix = '';
for (let i=0; i<shortestLen; i++) {
  const prefix = strs[0].substr(0, i+1);

  const set = new Set();
  set.add(prefix);
  let noMore = true;
  for (let k=1; k<strs.length; k++) {
    const nextPrefix = strs[k].substr(0, i+1);
    set.add(nextPrefix);

    if (set.size > 1) {
      noMore = false;
      break;
    }
  }

  if (!noMore) {
    break;
  }

  lastPrefix = prefix;
}

return lastPrefix;
};