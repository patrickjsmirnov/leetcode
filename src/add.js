function add(a) {
  let sum = a;

  return function inner(b) {
    if (b === undefined) {
      return sum;
    }
    sum += b;
    return inner;
  };
}

console.log(add(1)(2)(3)(4)()); // 10
console.log(add(5)(10)(15)()); // 30
