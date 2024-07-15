/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const addedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => b - a);
  nums2.sort((a, b) => b - a);

  return nums2[0] - nums1[0];
};

console.log(addedInteger([2, 6, 4], [9, 7, 5])); // 3
console.log(addedInteger([10], [5])); // -5
console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1])); // 0
console.log(addedInteger([4, 10], [845, 839])); // 835
