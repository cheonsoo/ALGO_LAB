const start = new Date().getTime();

function factorial(i) {
  let memo = [];

  function fact(i) {
    if (i === 0) {
      return 1;
    }
    memo[i - 1] = memo[i - 1] || fact(i - 1); // memoization
    return i * memo[i - 1];
  }

  return fact(i);
}

console.log(factorial(5));

console.log(`exe time : ${new Date().getTime() - start}`);
