/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = function (nums) {
  let zeroCount = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 0) {
      zeroCount++;
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  let j = 0;

  while (j < zeroCount) {
    nums.push(0);
    j++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // 1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
