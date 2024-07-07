/**
 * @param {string} s
 * @return {string}
 */

const reverseVowels = function (s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  let result = s.split("");

  const isVowel = (ch) => ["a", "e", "i", "o", "u"].includes(ch);

  while (leftIndex < rightIndex) {
    const leftChar = s[leftIndex];
    const rightChar = s[rightIndex];

    if (!isVowel(leftChar)) {
      leftIndex++;
      continue;
    }

    if (!isVowel(rightChar)) {
      rightIndex--;
      continue;
    }

    [result[leftIndex], result[rightIndex]] = [
      result[rightIndex],
      result[leftIndex],
    ];
    leftIndex++;
    rightIndex--;
  }

  return result.join("");
};

console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // leotcede"
