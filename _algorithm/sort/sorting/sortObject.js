const not_sorted = [];
for (let i = 0; i < 100; i++) {
  const o = {
    key: parseInt(Math.random() * 100)
  };
  not_sorted.push(o);
}

not_sorted.sort((a, b) => a.key - b.key);
console.log(not_sorted);