/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  let i = 0;
  while (i < nums.length - 2) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    const fixed = nums[i];
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      if (fixed + nums[start] + nums[end] < 0) {
        start++;
      } else if (fixed + nums[start] + nums[end] > 0) {
        end--;
      } else {
        result.push([fixed, nums[start], nums[end]]);

        while (start < end && nums[start] === nums[start + 1]) {
          start++;
        }

        while (start < end && nums[end] === nums[end - 1]) {
          end--;
        }

        start++;
        end--;
      }
    }

    i++;
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
