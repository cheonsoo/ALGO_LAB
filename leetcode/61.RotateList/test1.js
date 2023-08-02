console.time();
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const convertArrayToList = (arr) => {
  let node;
  for (let i=arr.length-1; i>=0; i--) {
    if (!node)
      node = new ListNode(arr[i], null);
    else
      node = new ListNode(arr[i], node);
  }
  return node;
};

const convertListToArray = (list) => {
  if (!list.next)
    return [list.val];

  let current = list.next;
  let arr = [list.val];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const getLastVal = (list) => {
  let val = list.val;
  let next = list.next;;
  while (next) {
    val = next.val;
    next = next.next;
  }
  return val;
};

const getListSize = (list) => {
  let val = list.val;
  let next = list.next;;
  let cnt = 0;
  while (next) {
    val = next.val;
    next = next.next;
    cnt++;
  }
  return cnt + 1;
}

const removeLastNode = (list) => {
  if (list === null)
    return null;

  if (list.next === null)
    return null;

  let secondLast = list;
  while (secondLast.next.next !== null) {
    secondLast = secondLast.next;
  }

  secondLast.next = null;

  return list;
};

const insertNodeAtFirst = (list, val) => {
  return new ListNode(val, list);
};

var rotateRight = function(head, k) {
  if (!head)
    return head;

  if (!head.val && !head.next)
    return head;

  const listSize = getListSize(head);
  if (k % listSize === 0)
    return head;

  for (let i=0; i<k%listSize; i++) {
    const lastVal = getLastVal(head);
    head = removeLastNode(head);
    head = insertNodeAtFirst(head, lastVal);
  }

  return head;
};

// const input = convertArrayToList([1,2,3]), k = 6;
// const input = convertArrayToList([1,2,3]), k = 2000000000;
const input = convertArrayToList([1,2]), k = 1;
const result = rotateRight(input, k);
console.log(`### result: ${convertListToArray(result)}`);
console.timeEnd();