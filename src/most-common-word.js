/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

const mostCommonWord = function (paragraph, banned) {
  const countsMap = {};

  const isLetter = (char) =>
    char.toLowerCase() >= "a" && char.toLowerCase() <= "z";

  let word = "";
  for (let i = 0; i <= paragraph.length; i++) {
    if (i < paragraph.length && isLetter(paragraph[i])) {
      word += paragraph[i].toLowerCase();
    } else if (word.length > 0) {
      if (!banned.includes(word)) {
        countsMap[word] = (countsMap[word] || 0) + 1;
      }
      word = "";
    }
  }

  let maxCount = 0;
  let mostCommon = "";

  for (const [key, value] of Object.entries(countsMap)) {
    if (value > maxCount) {
      maxCount = value;
      mostCommon = key;
    }
  }

  return mostCommon;
};

console.log(mostCommonWord("Bob", [])); // bob
console.log(mostCommonWord("Bob.", [])); // bob
console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
); // ball
console.log(mostCommonWord("a.", [])); // a
