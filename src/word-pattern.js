/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

const wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const mapPatternToWord = new Map();
  const mapWordToPattern = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (mapPatternToWord.has(char) && mapPatternToWord.get(char) !== word) {
      return false;
    }
    if (mapWordToPattern.has(word) && mapWordToPattern.get(word) !== char) {
      return false;
    }

    mapPatternToWord.set(char, word);
    mapWordToPattern.set(word, char);
  }

  return true;
};

console.log(wordPattern("aaa", "aa aa aa aa")); // true
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
