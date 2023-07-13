var a;

console.log(a); // you get "undefined"

if (a === undefined) {
    console.log("UNDEFINED")
}
else {
    console.log("defined")
}

/* is notdefined and undefined are same = NO

    1) "not defined" means variable is not declared/defined;
    2) "undefined" is a special value which says not initialized;
        undefined is the value that variabled receive during creation phase of
        execution context

    Initial phase of creating execution context sets all variables to undefined, and if we don't 
    initialize it holds "undefined" value

    But if we don't declare a variable we get "Uncaught ReferenceError: a is not defined"
    since execution context will not allocate memory

    Initialise = set a value

*/
