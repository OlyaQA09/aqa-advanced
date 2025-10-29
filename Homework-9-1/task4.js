const person = {
    firstName: "John",
    lastName: "Smith",
    age: "25"
};

person.email = "johnSmith@abc.com";
delete person.age;
console.log(person);
