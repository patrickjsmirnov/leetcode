/**
 * @param {number[]} nums
 * @return {number}
 */

const findMaxK = function (nums) {
  let maxNeg = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < maxNeg && nums.includes(Math.abs(nums[i]))) {
      maxNeg = nums[i];
    }
  }

  if (maxNeg < 0) {
    return Math.abs(maxNeg);
  } else {
    return -1;
  }
};

console.log(findMaxK([-1, 2, -3, 3])); // 3
console.log(findMaxK([-1, 10, 6, 7, -7, 1])); // 7
console.log(findMaxK([-10, 8, 6, 7, -2, -3])); // -1
