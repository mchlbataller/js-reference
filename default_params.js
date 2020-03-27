let increment = (num, inc = 1) => num + inc;

// Increments by default.
console.log(increment(5));

// This overrides the increment.
console.log(increment(5, 2));

