const wordCount = word => {
  const arr = new Array(26).fill(0);
  const codeOfA = 'a'.charCodeAt();
  for (let k = 0; k < word.length; k++) {
    const char = word.charAt(k);
    arr[char.charCodeAt() - codeOfA]++;
  }
  return arr;
};

const word2Map = words => {
  let arr = new Array(26).fill(0);
  for (let word of words) {
    let table = wordCount(word);
    for (let i = 0; i < 26; i++) {
      arr[i] = Math.max(arr[i], table[i]);
    }
  }
  return arr;
};

var wordSubsets = function (words1, words2) {
  const count = word2Map(words2);
  const result = [];

  for (let a = 0; a < words1.length; a++) {
    const currentWord = words1[a];
    const currentWordCount = wordCount(currentWord);

    let flg = true;
    for (let b = 0; b < 26; b++) {
      if (currentWordCount[b] < count[b]) {
        flg = false;
        break;
      }
    }

    if (flg) result.push(currentWord);
  }

  return result;
};

// const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
// const words2 = ['e', 'oo'];
const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
const words2 = ['lo', 'eo'];
const result = wordSubsets(words1, words2);
console.log('result', result);
