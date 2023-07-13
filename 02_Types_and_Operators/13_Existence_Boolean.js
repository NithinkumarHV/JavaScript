//Existence and Booleans

var a; // undefined
var abc; // undefined

// goes to internet and looks for a value

a = "Hi" // "Hi"

if (a) { // a is coerced to boolean
    console.log("A")
}

abc = 0;

if (abc || abc === 0) { // a is coerced to boolean
    console.log("ABC")
}

// Working
/*
    Step 1: abc || true
    Step 2: false || true,   abc=0 is coerced to Boolean which is false
    
    O/P: true
*/

console.log(Boolean(undefined)) // false

console.log(Boolean(null)) // false

console.log(Boolean("")) // false

console.log(Boolean("Hi")) // true

console.log(Boolean(0)) // false