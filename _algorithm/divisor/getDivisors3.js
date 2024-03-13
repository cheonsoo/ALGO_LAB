function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(num);
      divisors.push(i);
    }
  }
  return Array.from(new Set(divisors)).sort((a, b) => a - b);
}

const num = 26;
console.log(getDivisors(num));
