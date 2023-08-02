function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

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

const convertArrayToList = (arr) => {
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

const getNode = (head, n) => {
  let idx = 0;

  let node = head;
  while(node.next) {
    if (idx === n) {
      break;
    }
    node = node.next;
    idx++;
  }
}

// const removeNthNode = (head, n) => {
//   let idx = 0;
//   let node = head;
//   while(node) {
//     if (idx === n) {
//       node.val = node.next.val;
//       node.next = node.next.next;
//       break;
//     }
//     node = node.next;
//     idx++;
//   }

//   return head;
// }

const removeNthNode = (head, n) => {
  console.log(`removing ${n}th node`);
  if (n === 0)
    return head.next;

  let idx = 0;
  let node = head;
  let prev = null;
  while(node) {
    if (idx === n) {
      // console.log('###### remove');
      if (node.next) {
        // console.log(111);
        node.val = node.next.val;
        node.next = node.next.next;
      } else {
        // console.log(222);
        prev.next = null;
      }

      break;
    }
    prev = node;
    node = node.next;
    idx++;
  }

  return head;
}

var removeNthFromEnd = function(head, n) {
  let size = 0;
  let node = head;
  while (node.next) {
    node = node.next;
    size++;
  }
  size++;
  console.log('size', size);

  if (size === 1 && n === 1)
    return new ListNode();

  if (size < n)
    return head;

  // return getNode(head, size - n);
  return removeNthNode(head, size - n);
};

// const head = convertArrayToList([1,2,3,4,5]), n = 2; // Output: [1,2,3,5]
const head = convertArrayToList([1]), n = 1; // Output: []
// const head = convertArrayToList([1,2]), n = 1; // Output: [1]

const result = removeNthFromEnd(head, n);
console.log('result', convertListToArray(result));
