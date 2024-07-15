/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */

const occurrencesOfElement = function (nums, queries, x) {
  const result = [];
  const map = new Map();
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      map.set(count, i);
      count++;
    }
  }

  for (let j = 0; j < queries.length; j++) {
    if (map.get(queries[j]) !== undefined) {
      result.push(map.get(queries[j]));
    } else {
      result.push(-1);
    }
  }

  return result;
};

console.log(occurrencesOfElement([1, 3, 1, 7], [1, 3, 2, 4], 1)); // [0,-1,2,-1]
console.log(occurrencesOfElement([1, 2, 3], [10], 5)); // [-1]
console.log(
  occurrencesOfElement(
    [1, 4, 3, 3, 6, 4, 8, 3, 10],
    [1, 2, 1, 1, 1, 1, 2, 2, 1, 1],
    7
  )
); // [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
