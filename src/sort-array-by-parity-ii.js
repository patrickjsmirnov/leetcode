/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArrayByParityII = function (nums) {
  const result = [];
  let evenIndex = 0;
  let oddIndex = 1;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] % 2 === 0) {
      result[evenIndex] = nums[i];
      if (evenIndex + 2 < nums.length) {
        evenIndex += 2;
      }
    } else {
      result[oddIndex] = nums[i];

      if (oddIndex + 2 < nums.length) {
        oddIndex += 2;
      }
    }
    i++;
  }

  return result;
};

console.log(sortArrayByParityII([4, 2, 5, 7])); // [4,5,2,7]
console.log(sortArrayByParityII([3, 2, 3, 3, 2, 2])); // [2, 3, 2, 3, 2, 3]
console.log(sortArrayByParityII([2, 3])); // [2,3]
