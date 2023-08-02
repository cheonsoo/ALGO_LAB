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
  const wordLen = words[0].length;

  const result = [];
  const _str = str;
  while (_str) {
    const w = _str.substr(0, wordLen);
    result.push(w);
    _str = _str.replace(w, '');
  }
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
        console.log('i', i);
        flg = true;
        break;
      }
    }

    if (flg) {
      let isHaveAll = true;
      let str = s.substr(i, wordLen * arrLen);
      console.log(str);
      for (let c = 0; c < arrLen; c++) {
        if (str.indexOf(words[c]) >= 0) {
          // str = str.replace(words[c], '');
          str = str.substr(str.indexOf(words[c], wordLen));
        } else {
          isHaveAll = false;
          break;
        }
      }

      if (isHaveAll) {
        result.push(i);
      }
    }
  }

  return result;
};
