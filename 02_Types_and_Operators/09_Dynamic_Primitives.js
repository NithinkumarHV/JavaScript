//Dynamic typing and types

var isLoggenIn = "string"
console.log(isLoggenIn);
isLoggenIn = true
console.log(isLoggenIn);
isLoggenIn = 1
console.log(isLoggenIn);


//Primitive types = type of data that represents a single value, i.e, not an object

var a;  //undefined
var b = null
var c = true
var num = 1 // floating point
var n = "string" // string
var symbol; // used in ES6

// Operators => a special function syntactically written differently
/*
    +37 - prefix
    3+7 - infix
    37+ - postfix

    other operators +, -, <, > ....
*/

var a = 3 + 7   // "+" is operator, prefix
console.log(a)



/*
    Static typing Java,C...

    bool isLoggenIn = "string"  error


    Dynamic typing

    You tell explicitly which type of data a variable shoulf hold
    variables can have various types of values bcz it is determined during execution phase

    var isLoggenIn = "string"   no error
*/