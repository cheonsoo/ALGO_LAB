const start = new Date().getTime();

const quick = arr => {
  if (arr.length <= 1) return arr;

  let pivot = arr.shift(); // first element
  // let pivot = arr.splice(arr.length / 2, 1); // middle element

  let left = [];
  let right = [];
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return new_arr.concat(quick(left), pivot, quick(right));
};

const not_sorted = [];
for (let i = 0; i < 100000; i++) {
  not_sorted.push(parseInt(Math.random() * 1000));
}
const sorted = quick(not_sorted);

// console.log(not_sorted.join(','));
// console.log(sorted.join(','));

console.log(`exe time : ${new Date().getTime() - start} ms`);
