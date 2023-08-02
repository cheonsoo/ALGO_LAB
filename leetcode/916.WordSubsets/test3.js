/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const result = [];

  for (let i = 0; i < words1.length; i++) {
    const currentWord = words1[i];

    let flg = true;
    for (let k = 0; k < words2.length; k++) {
      let currentWordTmp = currentWord;
      const chars = words2[k];

      for (let p = 0; p < chars.length; p++) {
        if (currentWordTmp.indexOf(chars[p]) === -1) {
          flg = false;
          break;
        } else {
          currentWordTmp = currentWordTmp.replace(chars[p], '');
        }
      }
    }

    if (flg) result.push(currentWord);
  }

  return result;
};

// const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
// const words2 = ['lo', 'eo'];
const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
const words2 = ['e', 'oo'];
const result = wordSubsets(words1, words2);
console.log('result', result);
