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

var reverseList = function (head) {
  let node = null;
  while (head) {
    let next = head.next;
    head.next = node;
    node = head;
    head = next;
  }
  return node;
};

const head = [1, 2, 3, 4, 5]; // output: 5,4,3,2,1
const result = reverseList(convertArrayToList(head));
console.log('result', convertListToArray(result));
