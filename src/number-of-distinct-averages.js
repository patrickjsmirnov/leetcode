/**
 * @param {number[]} nums
 * @return {number}
 */

const distinctAverages = function (nums) {
  const set = new Set();
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;
    set.add(average);
    left++;
    right--;
  }

  return set.size;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5])); // 2
console.log(distinctAverages([1, 100])); // 1
console.log(distinctAverages([10, 2, 2, 0, 4, 0])); // 2
