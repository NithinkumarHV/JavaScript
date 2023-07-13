// Single threaded and synchronous

function a() {
    b();
    var c;
}

function b() {
    var d;
}

a();
var e;

/* 
    Single threaded: one command at a time
    Synchronous: one line code at a time and in the order it appears

    FUNCTION INVOCATION
        a(); - call the function a
        here a new execution context is created for a and put on top of global execution context
        Every EC has 2 phases and has its own memory and variables
            1) creation
            2) Execution
        once done popped off the stack


    GEC - EC(a) - EC(b) =>  is called EXECUTION STACK
*/