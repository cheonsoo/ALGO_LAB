/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let l = new ListNode(0);
  let tmp = l;
  while(list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      tmp.next = list1;
      list1 = list1.next;
    } else {
      tmp.next = list2;
      list2 = list2.next;
    }

    tmp = tmp.next;

    console.log(convertListToArray(l));
    console.log(convertListToArray(tmp));
    console.log('=====');
  }

  if (list1)
    tmp.next = list1;
  if (list2)
    tmp.next = list2;

  return l.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const convertArrayToList = (arr) => {
  let node;
  for (let i=arr.length-1; i>=0; i--) {
    if (!node) {
      node = new ListNode(arr[i], null);
    } else {
      node = new ListNode(arr[i], node);
    }
  }
  return node;
};

const convertListToArray = (list) => {
  if (!list.next)
    return [list.val];

  const array = [list.val];
  let current = list.next;
  while(current.next !== null) {
    array.push(current.val);
    current = current.next;
  }
  array.push(current.val);
  return array;
};

const arr1 = [1,2,4], arr2 = [1,3,4];
const [list1, list2] = [convertArrayToList(arr1), convertArrayToList(arr2)];
const result = mergeTwoLists(list1, list2);
console.log('result: ', convertListToArray(result));