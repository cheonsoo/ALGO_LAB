/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const convertListToArray = list => {
  if (!list.next) return [list.val];

  const array = [list.val];
  let current = list.next;
  while (current.next !== null) {
    array.push(current.val);
    current = current.next;
  }
  array.push(current.val);
  return array;
};

const convertArrayToList = arr => {
  let node;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!node) {
      node = new ListNode(arr[i], null);
    } else {
      let temp = new ListNode(arr[i], node);
      node = temp;
    }
  }
  return node;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const num1 = convertListToArray(l1).reverse().join('');
  const num2 = convertListToArray(l2).reverse().join('');
  let sum = BigInt(num1) + BigInt(num2);
  console.log('sum', sum);
  sum = sum.toString().split('');
  return convertArrayToList(sum.reverse());
};
