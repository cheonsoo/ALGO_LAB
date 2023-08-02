var generateParenthesis = function (n) {
  const res = [];
  function generate(open, close, items) {
    if (open === n && close === n) {
      res.push(items.join(''));
      return;
    }
    if (open < n) {
      generate(open + 1, close, [...items, '(']);
    }
    if (close < open) {
      generate(open, close + 1, [...items, ')']);
    }
  }
  generate(0, 0, []);
  return res;
};

const result = generateParenthesis(3);
console.log('result', result);
