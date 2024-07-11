/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = function (nums1, nums2) {
  let obj1 = {};
  let res = [];

  for (let num of nums1) {
    obj1[num] = (obj1[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (obj1[num]) {
      res.push(num);
      obj1[num]--;
    }
  }
  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
