/**
 * @param {number[]} nums
 * @return {number}
 */

const findTheArrayConcVal = function (nums) {
  let value = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftNum = String(nums[left]);
    const rightNum = left === right ? "" : String(nums[right]);

    value += Number(leftNum + rightNum);

    left++;
    right--;
  }

  return value;
};

console.log(findTheArrayConcVal([7, 52, 2, 4])); // 596
console.log(findTheArrayConcVal([5, 14, 13, 8, 12])); // 673
