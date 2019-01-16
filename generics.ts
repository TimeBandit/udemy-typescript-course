console.log("Generics ☃");
// GENERICS

/* 
Imagine three candy machines, for example at an airport.

● The first one accepts any currency, but you can't be sure that it will return the change 
in the same currency (this would be like a function without static typing). 
In most cases not very practical!

● The second one accepts only dollars and no other currency and always returns dollars 
(this would be like a function with static typing). 
Not good either, because you need an additional machine for each currency.

● The third one accepts money in any currency, just like the first, and like the second 
it always returns the change in the exact currency it received 
(this would be like a function with generic typing).
*/

function echo(data: any) {
 return data;
}

console.log(echo("Max").length);
//  get no ts warning that length prop is not valid, hence the need for generics
console.log(echo(27).length); // <- not valid
console.log(echo({ name: "imran", age: 97 })); // <- not valid, get no warning

// Better Generic
// does not have to be T, can be any character
// the '<T>' makes it a generic function, give me the type and then i will use it
// it will infer it from the type of the argument
function betterEcho<T>(data: T) {
 return data;
}

// Generics make it possible for the editors to suggest the correct properties
// better ide support
// console.log(betterEcho(27).length);

// you can explicitly state what type you are going to use
// console.log(betterEcho<number>("27"));

// BUILT IN GENERICS

// testResultz: number[]
const testResultz: Array<number> = [1.94, 2.33];
// const testResultz: number[] = [1.94, 2.33];

testResultz.push(-2.99);
testResultz.push("strings");

// Arrays
function printAll<T>(args: T[]) {
 args.forEach(elements => {
  console.log(elements);
 });
}

printAll<string>(["apple", "banana"]);
printAll([2, "banana"]); // default to type any <any>

// Generic Types
// const name : type  = assignment
console.log("aloha");

const echo2: <T>(data: T) => T = echo;
console.log(echo2<string>("Something"));

// Generic Class
// the extended makes it generics
// class SimpleMath<T extends number | string> {
//   baseValue: T;
// 	multiplyValue: T;
// 	calculate(): number {
//     return +this.baseValue * +this.multiplyValue;
// 	}
// }

const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());

// using more than one generic type
// this means that T should be the same type as U, so they are strictly linked
// and not seperate
// class SimpleMath<T extends U | string, U extends number | string>
class SimpleMath<T extends number | string, U extends number | string> {
 baseValue: T;
 multiplyValue: U;
 calculate(): number {
  return +this.baseValue * +this.multiplyValue;
 }
}
