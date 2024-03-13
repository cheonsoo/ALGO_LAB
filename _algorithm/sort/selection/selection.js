const start = new Date().getTime();

const sort = data => {
  let min = 0;
  let idx = 0;
  let sorted = [];
  let min_idx = 0;

  for (var k = 0; k < data.length; k++) {
    min = data[k];
    min_idx = i;

    // Find values
    for (var i = k + 1; i < data.length; i++) {
      if (data[i] < min) {
        min = data[i];
        min_idx = i;
      }
    }

    // Swap
    var tmp = data.splice(min_idx, 1);
    var left = data.splice(0, idx);
    var right = data;
    idx++;

    data = [];
    data = data.concat(left, tmp, right);
  }
  return data;
};

const not_sorted = [];
for (let i = 0; i < 100; i++) {
  not_sorted.push(parseInt(Math.random() * 100));
}

console.log(sort(not_sorted).join(','));
console.log(`exe time : ${new Date().getTime() - start}`);
