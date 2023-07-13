//ES6 and let

console.log(a); // you get "undefined"

if(3>2){
    var a = true;
    var a = false;     //re-declaring and re-initializing allowed in var
    console.log(a);
}

console.log(c); // you get an error saying "c is not defined"

if(3>2){
    let c = true;
    c = false;      //re-declaring is not allowed in let
    console.log(c); 
}


/*
    Scope is where a variable is available in your code

    let => allows block scope

    if(a > b) {
        let c = true
    }

        It's only available inside the block
        Can't be used before declared
*/

