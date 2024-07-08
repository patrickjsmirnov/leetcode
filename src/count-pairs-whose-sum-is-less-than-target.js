/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      // (left, left+1), (left, left+2), ..., (left, right)
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2)); // 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)); // 10
