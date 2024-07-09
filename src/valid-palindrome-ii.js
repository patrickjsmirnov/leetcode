/**
 * @param {string} s
 * @return {boolean}
 */

const validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let count = 0;

  while (left < right) {
    if (s[left] !== s[right]) {
      count++;
    }

    left++;
    right--;
  }

  return count;
};

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false
console.log(validPalindrome("aasbhcsaa")); // false
