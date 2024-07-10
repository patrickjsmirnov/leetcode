/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function (s, t) {
  const charsMap = {};

  for (let ch of s) {
    if (charsMap[ch]) {
      charsMap[ch] += 1;
    } else {
      charsMap[ch] = 1;
    }
  }

  for (let ch of t) {
    if (!charsMap[ch]) {
      return false;
    }

    charsMap[ch] -= 1;
  }

  for (let num of Object.values(charsMap)) {
    if (num !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("ab", "a")); // false
