console.log("hello you");
var myName = "max";
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
var hobbies = ["cookied", "running"];
// the type is infered because hobbies was initialized with an array
// hobbies=[100];
// overwrite the assigned type
// let hobbies: any[] = ['cookied', 'running'];
console.log(typeof hobbies);
// new to ts; tuples; order is important
// let address: [string, number] = ['street', 99];
// enums - makes numbers more expressive - user defined fixed values
// used to encode numbers into more user friendly values
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any - a flexible type, try to avoid using it
var car = "bmw";
console.log(car);
car = { brand: "bmw", series: 3 };
console.log(car);
// functions
function getname(name) {
    return name;
}
console.log(getname("imran"));
// void
function sayHello() {
    console.log("Hello");
    // nothing is returned
    // will error if you do try to return something
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4));
/* function types means it can be assigned to variables */
// let myMultiply;
var myMultiply;
myMultiply = sayHello; // this errors as the function signatures don't match
myMultiply = multiply;
/* the above is not strict because any function can be assigned to the let
better to specify a function signature */
