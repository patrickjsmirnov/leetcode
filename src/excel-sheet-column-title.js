/**
 * @param {number} columnNumber
 * @return {string}
 */

const convertToTitle = function (columnNumber) {
  let column = "";

  while (columnNumber > 0) {
    let remainder = (columnNumber - 1) % 26;
    column = String.fromCharCode(remainder + "A".charCodeAt(0)) + column;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return column;
};

console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY

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
