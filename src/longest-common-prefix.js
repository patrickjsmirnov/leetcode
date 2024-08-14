/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let result = "";
  let minLen = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLen; i++) {
    const letter = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== letter) {
        return result;
      }
    }

    result += letter;
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
