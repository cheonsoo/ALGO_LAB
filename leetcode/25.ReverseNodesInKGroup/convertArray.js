function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const convertListToArray = list => {
  const array = [];
  let node = list;
  while (node) {
    array.push(node.val);
    node = node.next;
  }
  return array;
};

const convertArrayToList = array => {
  const list = new ListNode(0);
  array.reduce((prev, current) => (prev.next = new ListNode(current)), list);
  return list.next;
};

var reverseKGroup = function (head, k) {
  const array = convertListToArray(head);

  let result = [];
  let idx = 0;
  while (array && array.length > 0) {
    let slice = array.splice(0, k);
    // console.log(slice);
    if (slice.length < k) {
      result = result.concat(slice);
      break;
    }
    result = result.concat(slice.reverse((a, b) => b - a));
  }

  return convertArrayToList(result);
};

// const head = [1, 2, 3, 4, 5], k = 2; // Output: [2,1,4,3,5]
// const head = [1,2,3,4,5], k = 3; // Output: [3,2,1,4,5]
const head = convertArrayToList([1, 7, 3, 2, 7, 0, 1, 0, 0]),
  k = 4; // Output: [2,3,7,1,0,1,0,7,0]
const result = reverseKGroup(head, k);
console.log('result', convertListToArray(result));
