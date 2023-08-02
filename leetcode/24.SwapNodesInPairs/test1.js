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

const swap = node => {
  let tmpNode = node;
  const tmpVal = tmpNode.val;
  tmpNode.val = tmpNode.next.val;
  tmpNode.next.val = tmpVal;
  tmpNode = tmpNode.next.next;
};

var swapPairs = function (head) {
  let idx = 0;
  const node = head;
  let current;
  while (true) {
    if (!current) current = node;
    if (idx % 2 === 0 && current.next) {
      swap(current);
    }

    if (!current.next) break;

    current = current.next;
    idx++;
  }
  return head;
};

const head = convertArrayToList([1, 2, 3, 4]); //Output: [2,1,4,3]
// const head = []; // Output: []
// const head = [1]; // Output: [1]

const result = swapPairs(head);
console.log('result', convertListToArray(result));
