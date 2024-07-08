/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */

const findIndices = function (nums, indexDifference, valueDifference) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        Math.abs(i - j) >= indexDifference &&
        Math.abs(nums[i] - nums[j]) >= valueDifference
      ) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
};

console.log(findIndices([5, 1, 4, 1], 2, 4)); // [0,3]
console.log(findIndices([2, 1], 0, 0)); // [0,0]
console.log(findIndices([1, 2, 3], 2, 4)); // [-1,-1]
