/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const result = [];
  for (let i = 0; i < words1.length; i++) {
    const currentWord = words1[i];
    console.log(currentWord);

    let flg = true;
    for (let k = 0; k < words2.length; k++) {
      const char = words2[k];
      if (currentWord.indexOf(char) === -1) {
        flg = false;
        break;
      }
    }

    if (flg) result.push(currentWord);
  }

  return result;
};

const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
const words2 = ['lo', 'eo'];
const result = wordSubsets(words1, words2);
console.log('result', result);
