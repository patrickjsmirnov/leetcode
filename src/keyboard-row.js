/**
 * @param {string[]} words
 * @return {string[]}
 */

const findWords = function (words) {
  const rows = {
    qwertyuiop: new Set("qwertyuiop"),
    asdfghjkl: new Set("asdfghjkl"),
    zxcvbnm: new Set("zxcvbnm"),
  };

  const result = [];

  for (const word of words) {
    const lowerWord = word.toLowerCase();
    const firstCharRow = getRow(lowerWord[0]);

    if (lowerWord.split("").every((char) => firstCharRow.has(char))) {
      result.push(word);
    }
  }

  function getRow(char) {
    if (rows.qwertyuiop.has(char)) return rows.qwertyuiop;
    if (rows.asdfghjkl.has(char)) return rows.asdfghjkl;
    if (rows.zxcvbnm.has(char)) return rows.zxcvbnm;
    return new Set();
  }

  return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska","Dad"]
console.log(findWords(["omk"])); // []
console.log(findWords(["adsdf", "sfd"])); // ["adsdf","sfd"]
