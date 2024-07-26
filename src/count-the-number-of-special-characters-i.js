/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars2 = function (word) {
  let count = 0;
  const upperMap = new Map();
  const set = new Set();

  for (let letter of word) {
    if (letter === letter.toUpperCase()) {
      upperMap.set(letter, true);
    }
  }

  for (let letter of word) {
    if (
      letter === letter.toLowerCase() &&
      !set.has(letter) &&
      upperMap.get(letter.toUpperCase())
    ) {
      set.add(letter);
      count++;
    }
  }

  return count;
};

const numberOfSpecialChars = function (word) {
  const lowerSet = new Set();
  const upperSet = new Set();

  for (let letter of word) {
    if (letter === letter.toLowerCase()) {
      lowerSet.add(letter);
    } else {
      upperSet.add(letter);
    }
  }

  let count = 0;
  for (let letter of lowerSet) {
    if (upperSet.has(letter.toUpperCase())) {
      count++;
    }
  }

  return count;
};

console.log(numberOfSpecialChars("aaAbcBC")); // 3
console.log(numberOfSpecialChars("abc")); // 0
console.log(numberOfSpecialChars("abBCab")); // 1
