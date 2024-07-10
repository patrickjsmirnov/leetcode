/**
 * @param {number[]} nums
 * @return {number}
 */

const minimumAverage = function (nums) {
  nums.sort((a, b) => a - b);

  const averages = [];
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;
    averages.push(average);
    left++;
    right--;
    min = Math.min(min, average);
  }

  return min;
};

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1])); // 5.5
console.log(minimumAverage([1, 9, 8, 3, 10, 5])); // 5.5
console.log(minimumAverage([1, 2, 3, 7, 8, 9])); // 5.0
