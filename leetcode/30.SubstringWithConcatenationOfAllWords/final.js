/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
/*
# Case 1
"barfoothefoobarman"
["foo","bar"]
# Case 2
"wordgoodgoodgoodbestword"
["word","good","best","word"]
# Case 3
"lingmindraboofooowingdingbarrwingmonkeypoundcake"
["fooo","barr","wing","ding","wing"]
# Case 4
"foobarfoobar"
["foo","bar"]
# Case 5
"ababaab"
["ab","ba","ba"]
*/

const checkIfHasAllWords = (str, words) => {
  const splices = [];
  const wordLen = words[0].length;
  let _str = str;
  while (_str) {
    const w = _str.substr(0, wordLen);
    splices.push(w);
    _str = _str.replace(w, '');
  }

  let flg = true;
  for (let i = 0; i < words.length; i++) {
    let idx = splices.indexOf(words[i]);
    if (idx >= 0) {
      splices.splice(idx, 1);
    } else {
      flg = false;
    }
  }

  return flg;
};

var findSubstring = function (s, words) {
  if (!s || !words.length) return [];

  const result = [];
  let wordLen = words[0].length;
  let arrLen = words.length;
  for (let i = 0, len = s.length - (wordLen * arrLen - 1); i < len; i++) {
    let flg = false;
    let word = s.substr(i, wordLen);
    for (let k = 0; k < arrLen; k++) {
      if (word.startsWith(words[k])) {
        flg = true;
        break;
      }
    }

    if (flg) {
      let str = s.substr(i, wordLen * arrLen);
      if (checkIfHasAllWords(str, words)) {
        result.push(i);
      }
    }
  }

  return result;
};
