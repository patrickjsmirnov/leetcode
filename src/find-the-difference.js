/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const findTheDifference = function (s, t) {
  const charCount = new Map();

  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!charCount.has(char)) {
      return char;
    } else {
      charCount.set(char, charCount.get(char) - 1);
      if (charCount.get(char) === 0) {
        charCount.delete(char);
      }
    }
  }
};

console.log(findTheDifference("abcd", "abcde")); // e
console.log(findTheDifference("a", "aa")); // a
console.log(findTheDifference("", "y")); // y
