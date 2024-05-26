function solution(n) {
  const doors = Array(n + 1).fill(true);
  doors[0] = false;

  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      doors[j] = !doors[j];
    }
  }

  return doors.filter(door => door).length;
}