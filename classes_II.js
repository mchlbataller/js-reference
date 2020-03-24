// This is a constructor function. It has all the features of a function, except it does not return anything.
// It just defines properties and methods
// NOTE: Constructor functions usually start with a capital letter.
function Person(name) {
    // This is a property
    this.name = name;

    // This is a method
    this.greeting = () => console.log(`Hello. I am ${this.name}`);
}

// Calling constructors to make objects...
let person1 = new Person('Michael');

console.log(person1.name);

person1.greeting();