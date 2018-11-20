// Exercise 1 - Maybe use an Arrow Function?

// var double = function(value) {
//   return value * 2;
// };

const double = (val:number)=> val*2
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
// var greet = function (name) :void {
//   if (name === undefined) { name = "Max"; }
//   console.log("Hello, " + name);
// };

const greet = function (name:string = "Max") :void {
  console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers: number[] = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray: number[] = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults: number[] = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
// var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
type Scientist = {firstName: string, experience: number};
const scientist: Scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);