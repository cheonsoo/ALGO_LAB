class Tree {
  constructor(val) {
    this.val = val;
    this.leftNode = null;
    this.rightNode = null;
  }

  setVal(val) {
    this.val = val;
  }

  setLeft(node) {
    this.leftNode = node;
  }

  setRight(node) {
    this.rightNode = node;
  }
}

var recursivePreOrder = function (node) {
  if (!node) {
    return;
  }
  console.log(node.val);
  this.recursivePreOrder(node.leftNode);
  this.recursivePreOrder(node.rightNode);
};

var recursiveInOrder = function (node) {
  if (!node) {
    return;
  }
  this.recursiveInOrder(node.leftNode);
  console.log(node.val);
  this.recursiveInOrder(node.rightNode);
};

var recursivePostOrder = function (node) {
  if (!node) {
    return;
  }
  this.recursivePostOrder(node.leftNode);
  this.recursivePostOrder(node.rightNode);
  console.log(node.val);
};
