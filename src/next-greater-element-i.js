/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const nextGreaterElement = function (nums1, nums2) {
  let nextGreaterMap = new Map();
  let stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    let num = nums2[i];

    while (stack.length > 0 && stack[stack.length - 1] <= num) {
      stack.pop();
    }

    nextGreaterMap.set(num, stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.push(num);
  }

  let result = [];
  for (let num of nums1) {
    result.push(nextGreaterMap.get(num));
  }

  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
