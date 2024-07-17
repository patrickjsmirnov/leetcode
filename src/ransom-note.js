/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = function (ransomNote, magazine) {
  const charsMap = {};

  for (let char of ransomNote) {
    if (!charsMap[char]) {
      charsMap[char] = 0;
    }

    charsMap[char] += 1;
  }

  for (let char of magazine) {
    if (charsMap[char]) {
      charsMap[char] -= 1;
    }
  }

  for (let num of Object.values(charsMap)) {
    if (num !== 0) {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
