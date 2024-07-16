/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

const shortestCompletingWord = function (licensePlate, words) {
  const createLetterCountMap = (str) => {
    const map = {};
    for (const char of str.toLowerCase()) {
      if (char >= "a" && char <= "z") {
        map[char] = (map[char] || 0) + 1;
      }
    }
    return map;
  };

  const licensePlateMap = createLetterCountMap(licensePlate);
  let resultWord = null;

  const isCompletingWord = (word) => {
    const wordMap = createLetterCountMap(word);
    for (const char in licensePlateMap) {
      if (!wordMap[char] || wordMap[char] < licensePlateMap[char]) {
        return false;
      }
    }
    return true;
  };

  for (const word of words) {
    if (isCompletingWord(word)) {
      if (resultWord === null || word.length < resultWord.length) {
        resultWord = word;
      }
    }
  }

  return resultWord;
};

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
); // steps
console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
); // pest
console.log(
  shortestCompletingWord("GrC8950", [
    "measure",
    "other",
    "every",
    "base",
    "according",
    "level",
    "meeting",
    "none",
    "marriage",
    "rest",
  ])
); // according
