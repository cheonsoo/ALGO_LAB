function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
  this.size2 = 0;

  if (val !== undefined) this.size2++;
}

ListNode.prototype.size = function() {
  let val = this.val;
  let next = this.next;;
  let cnt = 0;
  while (next) {
    val = next.val;
    next = next.next;
    cnt++;
  }
  return cnt + 1;
}

ListNode.prototype.pop = function() {
  const head = this;
  if (head == null)
      return null;

  if (head.next == null) {
      return null;
  }

  // Find the second last node
  let second_last = head;
  while (second_last.next.next != null)
      second_last = second_last.next;

  // Change next of second last
  second_last.next = null;
}

ListNode.prototype.unshift = function(val) {
  const newNode = new ListNode();
  newNode.val = this.val;
  newNode.next = this.next;

  this.val = val;
  this.next = newNode;
};

ListNode.prototype.toArray = function() {
  if (!this.next)
    return [this.val];

  let current = this.next;
  let arr = [this.val];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
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

////////////////////////////// Test Code //////////////////////////////

// Start with the empty list /
// var head = null;

// Use push() function to construct
// the below list 8 . 23 . 11 . 29 . 12 /
// head = push(head, 12);
// head = push(head, 29);
// head = push(head, 11);
// head = push(head, 23);
// head = push(head, 8);

// head = removeLastNode(head);
// for (temp = head; temp != null; temp = temp.next)
//     document.write(temp.data + " ");

// This code contributed by Rajput-Ji

const l = convertArrayToList([1,2,3,4]);
// console.log(l.size);
console.log(`size: ${l.size()}`);
l.pop();
console.log(`size: ${l.size()}`);
console.log(l.toArray());
// console.log(removeLastNode(l));
// console.log(push(l, 123));
// l.unshift(123);
// console.log(convertListToArray(l));

