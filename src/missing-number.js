/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = function (nums) {
  const n = nums.length;
  const map = {};

  for (let num of nums) {
    map[num] = true;
  }

  for (let i = 0; i <= n; i++) {
    if (!map[i]) {
      return i;
    }
  }
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
