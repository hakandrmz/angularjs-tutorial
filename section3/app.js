var Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

function logPerson(person) {
  console.log(person);
}

var john = new Person("John", "Doe");
logPerson(john);
