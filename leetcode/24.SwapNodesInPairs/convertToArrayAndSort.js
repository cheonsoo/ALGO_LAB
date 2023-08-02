function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const convertArrayToList = arr => {
  const list = new ListNode(0);
  arr.reduce((prev, current) => (prev.next = new ListNode(current)), list);
  return list.next;
};

const convertListToArray = list => {
  const arr = [];
  let node = list;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
};

var swapPairs = function (head) {
  const converted = convertListToArray(head);
  for (let i = 0; i < converted.length; i++) {
    if (i % 2 === 0 && i < converted.length - 1) {
      let tmp = converted[i];
      converted[i] = converted[i + 1];
      converted[i + 1] = tmp;
      i++;
    }
  }
  return convertArrayToList(converted);
};

// const head = convertArrayToList([1, 2, 3, 4]); //Output: [2,1,4,3]
const head = convertArrayToList([1, 2, 3, 4, 5]); //Output: [2,1,4,3]
// const head = convertArrayToList([]); // Output: []
// const head = convertArrayToList([1]); // Output: [1]

const result = swapPairs(head);
console.log('result', convertListToArray(result));
