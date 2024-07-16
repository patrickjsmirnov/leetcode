/**
 * @param {character[][]} grid
 * @return {boolean}
 */

const canMakeSquare = function (grid) {
  for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
      let countW = 0;
      let countB = 0;

      for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 2; y++) {
          if (grid[i + x][j + y] === "W") {
            countW++;
          } else {
            countB++;
          }
        }
      }

      if (countW >= 3 || countB >= 3) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  canMakeSquare([
    ["B", "W", "B"],
    ["B", "W", "W"],
    ["B", "W", "B"],
  ])
); // true
console.log(
  canMakeSquare([
    ["B", "W", "B"],
    ["W", "B", "W"],
    ["B", "W", "B"],
  ])
); // false
console.log(
  canMakeSquare([
    ["B", "W", "B"],
    ["B", "W", "W"],
    ["B", "W", "W"],
  ])
); // true
