// Execution Context
// Creation
// Hoisting

b(); // you get "Called... here"
console.log(a); // you get "undefined here"
// here we don't get an error even though the function and variable has not been declared yet

var a = "Hello world"
// we can access "a" as window.a , since it is at global level

function b () {
    console.log("Called...")
}

/* 

Execution Context: Creation Phase
    1)Global object
    2)this
    3)Sets up memory for variables and functions
    i.e, before execution runs, memory is created for functions and variables

    All variables in JS are initially set to "undefined", therefore since memory is allocated 
    we don't get an error but since it is not initialized output will be "undefined"

    Hositing: I can call the function and variables eventhough it is declared later



*/
