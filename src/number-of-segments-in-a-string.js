/**
 * @param {string} s
 * @return {number}
 */

const countSegments = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " " && (i === 0 || s[i - 1] === " ")) {
      count++;
    }
  }

  return count;
};

console.log(countSegments("Hello, my name is John")); // 5
console.log(countSegments("Hello")); // 1
console.log(countSegments("                ")); // 0
console.log(countSegments(" ")); // 0
console.log(countSegments(", , , ,        a, eaefa")); // 6
