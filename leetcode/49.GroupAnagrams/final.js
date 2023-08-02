const data = require('./input1.js');

const isAnagram = (source, target) => {
  if (source === '' && target === '') return true;

  if (source.length !== target.length) return false;

  if (source.split('').sort().join('') === target.split('').sort().join('')) {
    return true;
  }
  return false;
};

var groupAnagrams = function (strs) {
  if (strs.length === 1) {
    return [strs];
  }
  const result = [];

  while (strs.length > 0) {
    const source = strs[0];
    strs.splice(0, 1);
    const anagrams = [];
    anagrams.push(source);

    let idx = 0;
    // while(strs.length > 0) {
    while (strs[idx] !== undefined) {
      const target = strs[idx];
      if (isAnagram(source, target)) {
        anagrams.push(target);
        strs.splice(idx, 1);
        continue;
      }

      idx++;
    }

    result.push(anagrams);
  }

  return result;
};
const start = new Date().getTime();
// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']; // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// const strs = ['', '']; // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
strs = data.data;
const result = groupAnagrams(strs);
console.log('result', result);

console.log('exe time: ', new Date().getTime() - start);
