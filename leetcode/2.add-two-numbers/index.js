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
    console.log('### addTwoNumbers');
    const list = convertArrayToList2([1,2,3,4,5].reverse());
    console.log('list', list);
    console.log('list', list.next);
    console.log('list', list.next.next);
    console.log('list', list.next.next.next);
    console.log('list', list.next.next.next.next);

    const array = convertListToArray(list);
    console.log(array);
};

const convertListToArray = (list) => {
  const array = [list.val];
  let current = list.next;
  while(current.next !== null) {
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
  return arr.reduce((acc, current) => acc = new ListNode(current, acc || null), []);
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

addTwoNumbers();