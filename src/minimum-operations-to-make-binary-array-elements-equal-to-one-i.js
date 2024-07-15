/**
 * @param {number[]} nums
 * @return {number}
 */

const minOperations = function (nums) {
  let operations = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 0) {
      nums[i] = 1 - nums[i];
      nums[i + 1] = 1 - nums[i + 1];
      nums[i + 2] = 1 - nums[i + 2];
      operations++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return -1;
    }
  }

  return operations;
};

console.log(minOperations([0, 1, 1, 1, 0, 0])); // 3
console.log(minOperations([0, 1, 1, 1])); // -1
