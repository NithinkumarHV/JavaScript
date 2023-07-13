//Scope chain

function i() { 
    console.log(myVar1) // myVar = 1 from GEC
}

function j() {  
    var myVar1=2;
    i();
}

var myVar1 = 1; 
j();

/* 
    Every execution context has reference to its outer env
    What is outer env ?
        In case of func b its outer env is GEC
        In case of func a its outer env is GEC
    How ?
        Lexically b() and a() is on GEC
    In JS if you ask for a particular variable, if not there in present EC(here b()),
    then it checks in outer env(here GEC)

    This whole chain is called as Scope chain i.e, links to outer env references
*/

// How to chain this scope chain by lexical changes(where is the code physically)

/* 
    here, instead of GEC it goes to a's EC

    In case of func b its outer env is a's EC 

    (b() is created inside the a() i.e, b()
    is created when a's EC is created )
    
    In case of func a its outer env is GEC

    here if myVar is not defined inside then it goes to GEC
*/


function a() {  

    function b() { 
        console.log(myVar);
    }

    var myVar=2;
    b();
}

var myVar = 1; 
a();