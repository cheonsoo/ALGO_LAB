function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  divisors.push(num);
  return divisors;
}

const num = 24;
console.log(getDivisors(num));
