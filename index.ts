console.log('hello you')
let myName = 'max';

let myRealAge:number;
myRealAge = 27;
// myRealAge = '27';

let hobbies = ['cookied', 'running'];
// the type is infered because hobbies was initialized with an array
// hobbies=[100];
// overwrite the assigned type
// let hobbies: any[] = ['cookied', 'running'];
console.log(typeof hobbies);

// new to ts; tuples; order is important
// let address: [string, number] = ['street', 99];

// enums - makes numbers more expressive - user defined fixed values
// used to encode numbers into more user friendly values
enum Color { 
  Grey, // 0
  Green=100, // 1 these id's refer to the last item, the defaul is 0,1...
  Blue // 2
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any - a flexible type, try to avoid using it
let car: any = "bmw"
console.log(car);
car = {brand:"bmw", series:3}
console.log(car);

// functions
function getname(name:string): string {
  return name
}
console.log(getname('imran'));

// void
function sayHello(): void {
  console.log('Hello');
  // nothing is returned
  // will error if you do try to return something
}

// argument types
function multiply(value1:number, value2:number):number {
  return value1*value2;
}
console.log(multiply(2,4));

/* function types means it can be assigned to variables */
// let myMultiply;
let myMultiply: (val1:number, val2:number)=>number;
myMultiply = sayHello; // this errors as the function signatures don't match
myMultiply = multiply;
/* the above is not strict because any function can be assigned to the let
better to specify a function signature */


