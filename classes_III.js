// Making objects without defining constructors

// 1. Through the Object constructor
let person1 = new Object();

person1.name = "Michael";
person1.age = "19";

///////////// OR /////////////////

let person1_exp = new Object({name: "Michael", age: "19"});

// 2 Using the create method

let person2 = Object.create(person1);
console.log(person2.name);
person2.name = "Michael_mod";

console.log(person2.name, person1.name);
// outputs 'Michael_mod Michael'
// 
// Meaning, creating an instance of the object pass by value. 
// Changing the values of person2 will not affect person1 UNLESS
// it has been assigned with the "=" operator.