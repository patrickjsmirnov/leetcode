/**
 * @param {string} word
 * @return {number}
 */

const numberOfSpecialChars = function (word) {
  const lowerMap = new Map();
  const upperMap = new Map();
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      lowerMap.set(word[i], i);
    } else if (upperMap.get(word[i]) === undefined) {
      upperMap.set(word[i], i);
    }
  }

  for (let [letter, index] of lowerMap.entries()) {
    const upperPosition = upperMap.get(letter.toUpperCase()) ?? 0;

    if (upperPosition > index) {
      count++;
    }
  }

  return count;
};

console.log(numberOfSpecialChars("aaAbcBC")); // 3
console.log(numberOfSpecialChars("cCceDC")); // 0
console.log(numberOfSpecialChars("abc")); // 0
console.log(numberOfSpecialChars("AbBCab")); // 0
