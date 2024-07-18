/**
 * @param {number} rowIndex
 * @return {number[]}
 */

const getRow = function (rowIndex) {
  const result = [];

  for (let i = 0; i <= rowIndex; i++) {
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

  return result.at(-1);
};

console.log(getRow(3)); // [1,3,3,1]
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1,1]
