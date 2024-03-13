function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

TreeNode.prototype.height = function () {
  function getHeight(node, h) {
    if (!node) return;

    if (height < h) height = h;

    node.left && getHeight(node.left, h + 1);
    node.right && getHeight(node.right, h + 1);
  }

  let height = 0;
  getHeight(this, 0);
  return height + 1;
};

var pathSum = function (root, targetSum) {
  console.time();
  // console.log('root', root);
  // console.log('root val', root.val);
  // console.log('root left', root.left);
  // console.log('targetSum', targetSum);

  const repeat = function (node, path, sum) {
    console.log('node', node);
    console.log('path', path);

    if (sum === targetSum && !node.left && !node.right) {
      // console.log('sum', sum);
      // console.log('path', path);
      // console.log(`path: ${path.join(', ')}`);
      // if (!node.left && !node.right)
      result.push(path);
      return;
    }
    if (!node) {
      return;
    }

    node.left && repeat(node.left, path.concat(node.left.val), sum + node.left.val);
    node.right && repeat(node.right, path.concat(node.right.val), sum + node.right.val);
  };

  if (!root) return [];

  const result = [];
  repeat(root, [].concat(root.val), root.val);
  const nodeHeight = root.height();

  console.log('result', result);
  console.log('height', nodeHeight);

  console.timeEnd();
  return result;
};

/*
            5
          /  \
        4     8
      /     /  \
    11    13   4
  /  \      /  \
7    2    5     1
const node_4_1 = new TreeNode(7, null, null);
const node_4_2 = new TreeNode(2, null, null);
const node_4_3 = new TreeNode(5, null, null);
const node_4_4 = new TreeNode(1, null, null);

const node_3_1 = new TreeNode(11, node_4_1, node_4_2);
const node_3_2 = null;
const node_3_3 = new TreeNode(13, null, null);
const node_3_4 = new TreeNode(4, node_4_3, node_4_4);

const node_2_1 = new TreeNode(4, node_3_1, null);
const node_2_2 = new TreeNode(8, node_3_3, node_3_4);

const root = new TreeNode(5, node_2_1, node_2_2);
*/

/*
             1
          /    \
        -2     -3
      /   \    /
    1     3  -2
  /
-1
const node_4_1 = new TreeNode(-1, null, null);

const node_3_1 = new TreeNode(1, node_4_1, null);
const node_3_2 = new TreeNode(3, null, null);
const node_3_3 = new TreeNode(-2, null, null);

const node_2_1 = new TreeNode(-2, node_3_1, node_3_2);
const node_2_2 = new TreeNode(-3, node_3_3, null);

const root = new TreeNode(1, node_2_1, node_2_2);
*/

/*
/*
   1
 /  \
2    3

const node_2_1 = new TreeNode(2, null, null);
const node_2_2 = new TreeNode(3, null, null);
const root = new TreeNode(1, node_2_1, node_2_2);
*/

/*
  1
 /
2

const node_2_1 = new TreeNode(2, null, null);
const root = new TreeNode(1, node_2_1, null);
*/

/*
/*
   -2
     \
     -3

const root = new TreeNode(-2, new TreeNode(null, null, null), new TreeNode(-3, null, null));
*/

const node_4_1 = new TreeNode(-1, null, null);

const node_3_1 = new TreeNode(1, node_4_1, null);
const node_3_2 = new TreeNode(3, null, null);
const node_3_3 = new TreeNode(-2, null, null);

const node_2_1 = new TreeNode(-2, node_3_1, node_3_2);
const node_2_2 = new TreeNode(-3, node_3_3, null);

const root = new TreeNode(1, node_2_1, node_2_2);
const targetSum = -1;

const result = pathSum(root, targetSum);
console.log('result: ', result);
