function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function convertArrayToTree(arr) {}

/*
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
*/
const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
  targetSum = 22;

/*
Input: root = [1,2], targetSum = 0
Output: []
*/
