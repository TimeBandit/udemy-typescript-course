/* constracts and interfaces */
// this is where you tell functions/methods what the input will look like
// function greetMe(person: { name: string }) {
//   console.log("hello, " + person.name);
// }
function greetMe(person) {
    console.log("hello, " + person.name);
}
const person = {
    name: "imran"
};
greetMe(person);
