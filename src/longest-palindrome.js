/**
 * @param {string} s
 * @return {number}
 */

const longestPalindrome = function (s) {
  let charFrequency = {};
  let oddFrequencyCount = 0;

  for (let char of s) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
    if (charFrequency[char] % 2 === 1) oddFrequencyCount++;
    else oddFrequencyCount--;
  }

  if (oddFrequencyCount > 1) return s.length - oddFrequencyCount + 1;

  return s.length;
};

console.log(longestPalindrome("abcd")); // 4
console.log(longestPalindrome("aaccbdg")); // 4
console.log(longestPalindrome("abccccdd")); // 7 // dccaccd
console.log(longestPalindrome("a")); // 1
