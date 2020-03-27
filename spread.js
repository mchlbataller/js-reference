// A spread operator '...' spreads or unpacks an array.

let array = [0,1,2,3,4,5];

console.log(Math.max(array));
// returns NaN since the Math.max accept literals.
// example: 
// console.log(Math.max(1,2,3,52));

// to unpack the array, add ellipses on it, or so called the spread operator.
console.log(Math.max(...array));
// outputs 5