/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return nums;
};

console.log(removeDuplicates([1, 1, 2])); // 2, nums = [1,2,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, nums = [0,1,2,3,4,_,_,_,_,_]
