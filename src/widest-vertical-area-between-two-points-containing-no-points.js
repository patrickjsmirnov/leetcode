/**
 * @param {number[][]} points
 * @return {number}
 */

const maxWidthOfVerticalArea = function (points) {
  const pointsX = points.map((point) => point[0]);

  pointsX.sort((a, b) => a - b);
  let max = 0;

  pointsX.forEach((pointX, index) => {
    if (index === 0) {
      return;
    }

    max = Math.max(max, pointX - pointsX[index - 1]);
  });

  return max;
};

console.log(
  maxWidthOfVerticalArea([
    [8, 7],
    [9, 9],
    [7, 4],
    [9, 7],
  ])
); // 1
console.log(
  maxWidthOfVerticalArea([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
); // 3
