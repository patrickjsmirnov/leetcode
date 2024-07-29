/**
 * @param {string} columnTitle
 * @return {number}
 */

const titleToNumber = function (columnTitle) {
  let columnNumber = 0;
  const length = columnTitle.length;

  for (let i = 0; i < length; i++) {
    columnNumber *= 26;
    columnNumber += columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
  }

  return columnNumber;
};

console.log(titleToNumber("A")); //  1
console.log(titleToNumber("AAA")); //  1
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701
console.log(titleToNumber("FXSHRXW")); // 2147483647

/*
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
*/
