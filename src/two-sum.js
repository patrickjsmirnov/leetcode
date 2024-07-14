/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const pairIdx = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (target - num in pairIdx) {
      return [i, pairIdx[target - num]];
    }

    pairIdx[num] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1,2 ]
console.log(twoSum([3, 3], 6)); // [0, 1]
