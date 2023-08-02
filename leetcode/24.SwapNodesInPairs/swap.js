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

  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
};

var swapPairs = function (head) {
  let node = head;
  while (node) {
    if (node.next) {
      let tmpVal = node.val;
      node.val = node.next.val;
      node.next.val = tmpVal;
      node = node.next.next;
    } else {
      break;
    }
  }
  return head;
};

// const head = convertArrayToList([1, 2, 3, 4]); //Output: [2,1,4,3]
// const head = convertArrayToList([1, 2, 3, 4, 5]); //Output: [2,1,4,3]
// const head = convertArrayToList([]); // Output: []
const head = convertArrayToList([1]); // Output: [1]

const result = swapPairs(head);
console.log('result', convertListToArray(result));
