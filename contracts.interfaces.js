/* constracts and interfaces */
// this is where you tell functions/methods what the input will look like
// function greetMe(person: { name: string }) {
//   console.log("hello, " + person.name);
// }
function greetMe(person) {
    console.log("hello, " + person.name);
}
const person = {
    name: "imran",
    age: 27,
    hobb: ["sleeping", "eating"],
    greet(lastname) {
        //
        console.log("I am " + this.name + " " + this.lastName);
    }
};
// if an object literal were passed in, instead of a constant it would be checked more strictly
// create your interfaces a explicity as possible show the optional parameters with ?
// but if you don't pass it in directly you can have more custom properties that aren't in the
// interface
greetMe(person);
/* INTERFACE WITH CLASSES */
class Person2 {
    constructor() {
        this.name = "";
    }
    greet(lastName) {
        console.log("I am " + this.name + " " + lastName);
    }
}
let myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(20, 30));
const oldPerson = {
    name: "Mo",
    age: 87,
    firstName: "Imran",
    greet(lastName) {
        console.log("Hello");
    }
};
