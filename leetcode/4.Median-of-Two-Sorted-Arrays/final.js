/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let merged = [];
  if (nums1.length === 0 || nums2.length === 0) {
    merged = nums1.concat(nums2);
  }

  if (merged.length === 0) {
    let i = 0, j = 0, k = 0;
    while (i<nums1.length || j<nums2.length) {
      if (!isNaN(nums1[i]) && nums2[j] === undefined) {
        merged[k++] = nums1[i++];
        continue;
      }
      if (nums1[i] === undefined && !isNaN(nums2[j])) {
        merged[k++] = nums2[j++];
        continue;
      }
      if (isNaN(nums1[i]) && isNaN(nums2[j])) {
        break;
      }

      if (nums1[i] <= nums2[j]) {
        merged[k++] = nums1[i++];
      } else {
        merged[k++] = nums2[j++];
      }
    }
  }
  console.log('merged', merged);

  const median = merged.length % 2 === 0 ? (merged[Math.floor(merged.length / 2) - 1] + merged[Math.floor(merged.length / 2)]) / 2 : merged[Math.floor(merged.length / 2)];
  return median;
};

/*
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

[1,2,3,4,5]
[3,4,5,6,7]
*/
const nums1 = [1,2,3,4,5], nums2 = [3,4,5,6,7];
// const nums1 = [1,3], nums2 = [2];
// const nums1 = [1,2], nums2 = [3,4];
// const nums1 = [0, 1], nums2 = [0, 2];
// const nums1 = [3, 4], nums2 = [];
// const nums1 = [2,2,4,4], nums2 = [2,2,4,4];
// const nums1 = [2,3], nums2 = [1];
// const nums1 = [0, 0], nums2 = [0, 0];

const result = findMedianSortedArrays(nums1, nums2);
console.log('result', result);