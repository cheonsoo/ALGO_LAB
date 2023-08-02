/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const result = [];
  let words2_2 = new Set();
  for (let a = 0; a < words2.length; a++) {
    for (let b = 0; b < words2[a].length; b++) {
      words2_2.add(words2[a].charAt(b));
    }
  }
  words2_2 = Array.from(words2_2);
  console.log(words2_2);

  for (let i = 0; i < words1.length; i++) {
    const currentWord = words1[i];

    let flg = true;
    for (let k = 0; k < words2_2.length; k++) {
      const char = words2_2[k];
      if (currentWord.indexOf(char) === -1) {
        flg = false;
        break;
      }
    }

    if (flg) result.push(currentWord);
  }

  return result;
};
