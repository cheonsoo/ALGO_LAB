/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  console.time();
  // console.log('root', root);
  // console.log('root val', root.val);
  // console.log('root left', root.left);
  // console.log('targetSum', targetSum);

  const repeat = function (node, path, sum) {
    console.log('node', node);
    console.log('path', path);
    console.log('sum', sum);

    if (sum === targetSum) {
      // console.log('sum', sum);
      console.log('path', path);
      // console.log(`path: ${path.join(', ')}`);
      result.push(path);
      return;
    }
    if (!node || sum > targetSum) {
      return;
    }

    repeat(node.left, path.concat(node.val), sum + node.val);
    repeat(node.right, path.concat(node.val), sum + node.val);
  };
  const result = [];
  repeat(root, [], 0);
  console.log('result', result);
  console.timeEnd();
  return result;
};
