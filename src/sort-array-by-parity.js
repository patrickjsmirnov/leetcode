/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else if (nums[right] % 2 !== 0) {
      right--;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
console.log(sortArrayByParity([0])); // [0]
