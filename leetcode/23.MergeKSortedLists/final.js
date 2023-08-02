function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const convertArrayToList = arr => {
  let list = new ListNode(-1);
  arr.reduce((prev, current) => (prev.next = new ListNode(current)), list);
  return list.next;
};

const convertListToArray = list => {
  if (!list || list.length === 0) return [];
  if (!list.next) return [list.val];
  // if (!list.next) return [list.val];

  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
};

var mergeKLists = function (lists) {
  const result = lists.reduce((prev, current) => prev.concat(convertListToArray(current)), []);
  return convertArrayToList(result.sort((a, b) => a - b));
};

// const arr1 = convertArrayToList([1, 4, 5]);
// console.log(convertListToArray(arr1));

// const lists = [convertArrayToList([1, 4, 5]), convertArrayToList([1, 3, 4]), convertArrayToList([2, 6])]; // Output: [1,1,2,3,4,4,5,6]
// const lists = [convertArrayToList([1]), convertArrayToList([0])]; // Output: [0, 1]
const lists = [[]]; // Output: [0, 1]
const result = mergeKLists(lists);
console.log('result', convertListToArray(result));
