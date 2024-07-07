/**
 * @param {string} s
 * @return {string}
 */

const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();

var reverseOnlyLetters = function (s) {
  let left = 0;
  let right = s.length - 1;
  const result = s.split("");

  while (left < right) {
    if (!isLetter(result[left])) {
      left++;
      continue;
    }

    if (!isLetter(result[right])) {
      right--;
      continue;
    }

    [result[left], result[right]] = [result[right], result[left]];
    left++;
    right--;
  }

  return result.join("");
};

console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"
