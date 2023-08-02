/**
 * @param {number[]} height
 * @return {number}
 *
 * O(n)
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let most = 0;
  while (left < right) {
    let width = right - left;
    let leftWall = height[left];
    let rightWall = height[right];

    let area = leftWall > rightWall ? rightWall * width : leftWall * width;

    if (area > most) most = area;

    if (leftWall < rightWall) left++;
    else right--;
  }

  return most;
};
