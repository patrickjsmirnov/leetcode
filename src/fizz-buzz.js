/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      str += "Buzz";
    }
    if (str === "") {
      str = String(i);
    }

    result.push(str);
  }

  return result;
};

console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
