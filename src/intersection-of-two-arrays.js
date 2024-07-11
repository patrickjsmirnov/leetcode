/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersection = function (nums1, nums2) {
  const result = [];

  for (let num of nums1) {
    if (nums2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]
