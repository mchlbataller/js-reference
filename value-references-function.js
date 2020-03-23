// Test function below demonstrates assigning values to a function
// pass by value, not by reference.
function test(a) {
    a = "modified!";

    return "Function ran successfully.";
}

let variable = "unmodified";
test(variable);
console.log(variable);

// Test2 function shows assigning objects pass by reference.
function test2(a) {
    a.string = "modified!";

    return "Function ran successfully.";
}

let variable1 = {string: "unmodified"};
test2(variable1);
console.log(variable1.string);

