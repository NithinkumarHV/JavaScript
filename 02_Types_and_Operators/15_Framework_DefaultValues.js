// Framework aside: Default values

console.log(libraryName); // Lib 2

/*
    JS files included in index.html loads in an order
    lib1.js - lib2.js - app.js
    here librayName = Lib 1 is replaced by Lib 2
*/

console.log(lib); // lib 1

// here lib = lib 1 is not replaced by lib 2, why ? check lib files