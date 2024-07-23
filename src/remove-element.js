/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = function (nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }

  return count;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2, nums = [2,2,_,_]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, nums = [0,1,4,0,3,_,_,_]
