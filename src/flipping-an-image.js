/**
 * @param {number[][]} image
 * @return {number[][]}
 */

const flipAndInvertImage = function (image) {
  const result = [];

  for (let i = 0; i < image.length; i++) {
    let row = image[i].reverse().map((item) => Number(!item));
    result.push(row);
  }

  return result;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
