/* constracts and interfaces */
// this is where you tell functions/methods what the input will look like

/* INTERFACES */

// an interface is where you declare a type where you want to make sure a
// certain type is available
// this promises that the incoming object will have at least a property
// 'name' although it could contain other properties

interface NamedPerson {
  name: string;
}

// function greetMe(person: { name: string }) {
//   console.log("hello, " + person.name);
// }

function greetMe(person: NamedPerson) {
  console.log("hello, " + person.name);
}

const person = {
  name: "imran"
};

greetMe(person);
