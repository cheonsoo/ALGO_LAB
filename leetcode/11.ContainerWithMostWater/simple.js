/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let most = 0;
  for (let a = 0; a < height.length; a++) {
    let start = height[a];
    for (let b = a + 1; b < height.length; b++) {
      let current = height[b];
      let width = b - a;
      let area = start > current ? current * width : start * width;

      if (area > most) most = area;
    }
  }

  return most;
};
