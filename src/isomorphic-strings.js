/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapS = {};
  const mapT = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (mapS[charS] && mapS[charS] !== charT) ||
      (mapT[charT] && mapT[charT] !== charS)
    ) {
      return false;
    }

    mapS[charS] = charT;
    mapT[charT] = charS;
  }

  return true;
};

console.log(isIsomorphic("badc", "baba")); // false
console.log(isIsomorphic("bbbaaaba", "aaabbbba")); // false
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
