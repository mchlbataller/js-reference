// Destructuring/Extracting object with ES6.
const object = {name: "Michael", age: "19"};

const {name, age} = object;

console.log(age);
// outputs 19

// You can also assign new variables as you extract objects...

const {name: myName, age: myAge} = object;
console.log(myName);
// outputs Michael