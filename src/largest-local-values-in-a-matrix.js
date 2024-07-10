/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

const largestLocal = function (grid) {
  const result = [];

  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[0].length - 2; j++) {
      const centerI = i + 1;
      const centerJ = j + 1;
      let max = 0;

      for (let k = centerI - 1; k <= centerI + 1; k++) {
        for (let l = centerJ - 1; l <= centerJ + 1; l++) {
          if (grid[k][l] >= max) {
            max = grid[k][l];
          }
        }
      }

      if (!result[i]) {
        result[i] = [];
      }

      result[i][j] = max;
    }
  }

  return result;
};

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
);

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
