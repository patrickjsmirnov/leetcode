/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

const isPrefixString = function (s, words) {
  let i = 0;
  let result = words[0];

  while (i < words.length) {
    if (s === result) {
      return true;
    } else {
      i++;
      result += words[i];
    }
  }

  return false;
};

console.log(
  isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
); // true
console.log(
  isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"])
); // false
console.log(isPrefixString("z", ["z"])); // true
