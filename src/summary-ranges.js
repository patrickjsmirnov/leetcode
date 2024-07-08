/**
 * @param {number[]} nums
 * @return {string[]}
 */

const summaryRanges = function (nums) {
  const result = [];
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right + 1] - nums[right] === 1) {
      right += 1;
    } else {
      if (left !== right) {
        result.push(`${nums[left]}->${nums[right]}`);
      } else {
        result.push(String(nums[left]));
      }

      left = right + 1;
      right = left;
    }
  }

  return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
