function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

var mergeKLists = function (lists) {
  // console.log(lists);
  const result = new ListNode();
  let node = result;
  let len = lists.length;
  while (true) {
    let leastNode = new ListNode(99999);

    for (let i = 0; i < len; i++) {
      if (!lists[i]) continue;

      if (lists[i].val < leastNode.val) {
        leastNode = lists[i];
        lists[i] = lists[i].next;
      }
    }

    node.next = leastNode;

    console.log(result);

    if (leastNode.val === 99999) break;

    debugger;
  }

  return result;
};

const input = (lists = [convertArrayToList([1, 4, 5]), convertArrayToList([1, 3, 4]), convertArrayToList([2, 6])]); // Output: [1,1,2,3,4,4,5,6]
const result = mergeKLists(lists);
console.log('result', convertListToArray(result));
