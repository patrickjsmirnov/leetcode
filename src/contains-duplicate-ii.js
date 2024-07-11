/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

const containsNearbyDuplicate = function (nums, k) {
  const hasmap = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    if (idx - hasmap.get(nums[idx]) <= k) {
      return true;
    }

    hasmap.set(nums[idx], idx);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
