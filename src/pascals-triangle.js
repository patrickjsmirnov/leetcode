/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = function (numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
    } else if (i === 1) {
      result.push([1, 1]);
    } else {
      const row = [1];

      for (let j = 0; j < i - 1; j++) {
        row.push(result[i - 1][j] + result[i - 1][j + 1]);
      }

      row.push(1);
      result.push(row);
    }
  }

  return result;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
