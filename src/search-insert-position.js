/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = function (nums, target) {
  let index = nums.findIndex((num) => num === target);

  if (index !== -1) {
    return index;
  }

  if (target > nums.at(-1)) {
    return nums.length;
  }

  if (target < nums[0]) {
    return 0;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < target && nums[i + 1] > target) {
      index = i + 1;
      break;
    }
  }

  return index;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
