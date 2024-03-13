const start = new Date().getTime();

const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(parseInt(Math.random() * 100));
}

for (let i = 1; i < arr.length; i++) {
  let tmp = arr[i];

  for (let k = i - 1; k >= 0; k--) {
    if (arr[k] > tmp) {
      // swap
      arr[k + 1] = arr[k];
      arr[k] = tmp;
    }
  }
}

console.log(arr.join(','));
console.log(`exe time : ${new Date().getTime() - start}`);