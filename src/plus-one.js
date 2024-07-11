/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = function (digits) {
  let l = digits.length - 1;

  let rec = function (p) {
    if (digits[p] < 9) {
      digits[p] += 1;
      return digits;
    } else {
      digits[p] = 0;
      if (p === 0) {
        digits.unshift(1);
        return digits;
      }
      return rec(p - 1);
    }
  };

  return rec(l);
};

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // 4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
