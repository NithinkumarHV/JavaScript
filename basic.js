// Objects and Literals

var ABC = {
  firstName: "firstName",
  lastName: "lastName",
  address: {
    street: "steet",
  },
};
console.log(ABC);

function hello(person) {
  console.log("Hi " + person.firstName);
}

hello(ABC);

hello({
  firstName: "firstName1",
  lastName: "lastName",
  address: {
    street: "steet",
  },
});

/*
 {} => Object literal
*/
