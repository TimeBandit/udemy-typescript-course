/* constracts and interfaces */
// this is where you tell functions/methods what the input will look like

/* INTERFACES */

// they are not compiled to js, they are only there to check the code
// an interface is where you declare a type where you want to make sure a
// certain type is available
// this promises that the incoming object will have at least a property
// 'name' although it could contain other properties

interface NamedPerson {
  name: string; // mandatory property
  age?: number; // optional property
  [propName: string]: any; // property whose name you dont know in advance; flexible keyname
  greet(lastName: string): void; // error will be flagged if object implementing this interface has
  // no greet method
}

// function greetMe(person: { name: string }) {
//   console.log("hello, " + person.name);
// }

function greetMe(person: NamedPerson) {
  console.log("hello, " + person.name);
}

const person: NamedPerson = {
  name: "imran", // mandatory
  age: 27, // optional property
  hobb: ["sleeping", "eating"], // flexible key
  greet(lastname: string) {
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
class Person2 implements NamedPerson {
  name: string = "";
  greet(lastName: string) {
    console.log("I am " + this.name + " " + lastName);
  }
}

/* FUNCTION TYPES */

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
};

console.log(myDoubleFunction(20, 30));

/* INTERFACE INHERITENCE */

interface AgedPerson extends NamedPerson {
  age: number; // in NamedPerson this was optiona;, now its required
}

const oldPerson: AgedPerson = {
  name: "Mo",
  age: 87,
  firstName: "Imran",
  greet(lastName: string) {
    console.log("Hello");
  }
};
