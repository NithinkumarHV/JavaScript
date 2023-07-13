// Operator precedence and Operator Associativity

var a = 3 + 4 * 5; // these are 2 function calls
console.log(a); 

var b = 3 * 5 / 3;
console.log(b) // 5  "*, /" is left associative

var o = 3, t = 4, th = 5;

o = t = th;

console.log(o); //5
console.log(t); //5
console.log(th); //5  "=" is right associative

/*
    Operator precedence - which operator gets called first when they are in same line

    Operator Associativity
        what order when 2 operators have same precendence
        Left to Right and vice versa
*/