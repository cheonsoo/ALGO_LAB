function getDivisors(num, divisors) {
  if (num === 1) {
    divisors.push(1);
    return divisors;
  }

  if (num === 2) {
    divisors.push(2);
    divisors.push(1);
    return divisors;
  }

  divisors.push(num);

  if (num % 2 === 0) {
    const div = num / 2;
    // divisors.push(div);

    return getDivisors(div, divisors);
  } else {
    divisors.push(1);
    return divisors;
  }
}

const num = 12;
console.log(getDivisors(num, []));
