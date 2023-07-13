/* Scoping */

function b() { // new EC for b, myVar = undefined
    var myVar; 
    console.log(myVar)
}

function a() {  // new EC for a, myVar = 2
    var myVar=2;
    console.log(myVar)
    b();
}

var myVar = 1; // belongs to GEC, myVar = 1
console.log(myVar)
a();
console.log(myVar)

/* 
    Each of myVar are different and belongs to its own "variable env" of EC
    OUTPUT:
        1               GEC
        2               a
        undefined       b
        1               GEC
*/  