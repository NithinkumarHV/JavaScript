// Objects

var person = new Object();

// [] => computed member access
person["firstName"] = "ABC"; // person object has reference to firstName property
person["lastName"] = "DEF";

var firstNameProperty = "firstName";

console.log(person);
console.log(person[firstNameProperty]); // ABC

// . => member access
console.log(person.firstName);

person.address = new Object();

person.address.street = "street";

console.log(person.address.street);
console.log(person["address"]["street"]);

/*
    An Object can have a,
        1) Primitive "property"
        2) Object "property"
        3) Function "method"

    Also an object is allocated a memory and has references to 
    1),2),3) which are also allocated a memory, thus connected

    Therefore an Object knows where it's properties and methods are in memory


*/
