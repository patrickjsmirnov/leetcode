/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function (nums) {
  const numbersMap = {};

  for (let num of nums) {
    numbersMap[num] = (numbersMap[num] ?? 0) + 1;
  }

  for (let count of Object.values(numbersMap)) {
    if (count > 1) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
