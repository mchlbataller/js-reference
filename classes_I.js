// Long version of classes.
// This is a function which returns objects and assigns properties inside of it.
function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = () => console.log(`Hello, I am ${obj.name}.`);

    return obj;
}

const michael = createNewPerson("Michael");
michael.greeting();