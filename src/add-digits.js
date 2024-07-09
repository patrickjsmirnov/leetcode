/**
 * @param {number} num
 * @return {number}
 */

const addDigitsRecursion = function (num) {
  if (Math.floor(num / 10) === 0) {
    return num;
  }

  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return addDigitsRecursion(sum);
};

console.log("rec: ", addDigitsRecursion(38)); // 38 --> 3 + 8 --> 11 / 11 --> 1 + 1 --> 2 / 2
console.log("rec: ", addDigitsRecursion(0)); // 0

const addDigits = function (num) {
  let sum = num;

  while (Math.floor(sum / 10) > 0) {
    let curNum = sum;
    sum = 0;

    while (curNum > 0) {
      sum += curNum % 10;
      curNum = Math.floor(curNum / 10);
    }
  }

  return sum;
};

console.log("loop: ", addDigits(38)); // 2
console.log("loop: ", addDigits(0)); // 0
