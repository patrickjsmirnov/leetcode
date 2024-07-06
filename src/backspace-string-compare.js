/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  let i = 0;
  let j = 0;
  const sStack = [];
  const tStack = [];

  while (i < s.length) {
    if (s[i] !== "#") {
      sStack.push(s[i]);
    } else {
      sStack.pop();
    }
    i++;
  }

  while (j < t.length) {
    if (t[j] !== "#") {
      tStack.push(t[j]);
    } else {
      tStack.pop();
    }
    j++;
  }

  return sStack.join("") === tStack.join("");
};

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false
console.log(backspaceCompare("xywrrmp", "xywrrmu#p")); // true
