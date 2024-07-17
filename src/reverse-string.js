/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  const mid = Math.floor(s.length / 2);

  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;

    if (i === mid) {
      break;
    }
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
