/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    const sChar = s[sIndex];
    const tChar = t[tIndex];

    if (sChar === tChar) {
      sIndex++;
    }

    tIndex++;
  }

  return sIndex === s.length;
};

console.log(isSubsequence("abc", "ahbgd")); // false
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
