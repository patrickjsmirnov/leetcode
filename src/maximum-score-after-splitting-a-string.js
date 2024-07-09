/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  let leftZeros = 0;
  let rightOnes = s.split("1").length - 1;

  for (let i = 0; i < s.length - 1; i++) {
    leftZeros += s[i] === "0" ? 1 : 0;
    rightOnes -= s[i] === "1" ? 1 : 0;

    const score = leftZeros + rightOnes;

    if (score > max) {
      max = score;
    }
  }

  return max;
};

console.log(maxScore("011101")); // 5
console.log(maxScore("00111")); // 5
console.log(maxScore("1111")); // 3
