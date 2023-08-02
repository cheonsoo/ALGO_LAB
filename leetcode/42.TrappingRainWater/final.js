/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  let max = 0;
  let maxIdx = 0;
  for (let i=0; i<height.length; i++) {
      if (height[i] > max) {
          max = height[i];
          maxIdx = i;
      }
  }
  
  let result = 0;
  let maxHeight = 0;
  for (let a=0; a<maxIdx; a++) {
      if (height[a] > maxHeight) {
          maxHeight = height[a];
      } else {
          result += maxHeight - height[a];
      }
  }
  
  maxHeight = 0;
  for (let b=height.length - 1; b>maxIdx; b--) {
      if (height[b] > maxHeight) {
          maxHeight = height[b];
      } else {
          result += maxHeight - height[b];
      }
  }
  
  return result;
};