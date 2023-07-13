// Default values

function hi(name) {
    console.log(name);              // undefined
    console.log("Hello " + name);   // "Hello undefined", JS coerced undefined to string "undefined"
}

hi(); // You can call function w/o arguments

function hello(name) {
    name = name || 'Some name';
    console.log("Hello " + name);
}

hello();

/*
    || => returns the first parameter that coerces to true

    undefined || "hello"    // hello
    null || "hello"         // hello
    "" || "hello"           // hello

*/

