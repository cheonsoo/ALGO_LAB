/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
L{
    val:1,
    next:{
        val:2,
        next: {
            val:3,
            next: {
                val:4,
                next:null
            }
        }
    }
}
*/
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  const num1 = convertListToArray(l1).join('');
  const num2 = convertListToArray(l2).join('');
  let sum = parseInt(num1) + parseInt(num2);
  sum = sum.toString().split('');
  return convertArrayToList(sum.reverse());
};

const convertListToArray = (list) => {
  const array = [list.val];
  let current = list.next;
  while(current && current.next !== null) {
    array.push(current.val);
    current = current.next;
  }
  array.push(current.val);
  return array;
};

const convertArrayToList = (arr) => {
  /*//
  return arr.reduce((acc, current) => {
    if (acc === null) {
      acc = new ListNode(current);
    } else {
      acc = new ListNode(current, acc);
    }
    return acc;
  }, []);
  /*/
  return arr.reduce((acc, current) => acc = new ListNode(current, acc), []);
  //*/
};

const convertArrayToList2 = (arr) => {
  let node;
  for (let i=arr.length-1; i>=0; i--) {
    if (!node) {
      node = new ListNode(arr[i], null);
    } else {
      let temp = new ListNode(arr[i], node);
      node = temp;
    }
  }
  return node;
};

const arraySample1 = [2,4,3,9,6,7];
const arraySample2 = [5,6,4,2,8,3];
const list1 = convertArrayToList(arraySample1);
const list2 = convertArrayToList(arraySample2);
const result = addTwoNumbers(list1, list2);
console.log(result);