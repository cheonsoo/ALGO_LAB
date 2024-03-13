/**
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946
 */

function fibonacci(idx, max, result) {
  if (idx === max - 2) return;
  result.push(result[result.length - 2] + result[result.length - 1]);
  fibonacci(idx + 1, max, result);
}

function run(max = 10) {
  const result = [0, 1];
  fibonacci(0, max, result);
  return result;
}

const result = run(10);
console.log('result', result);
