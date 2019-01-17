// DECORATORS

// decorator is a function you create, they can be attached to a class
// if you attach a decorator to a class it will get only one argument
// that is the constructor function of the class
function logged(constructorFn: Function) {
 console.log("hi");
 console.log(constructorFn);
}

@logged
class Person {
 constructor() {
  console.log("hi");
 }
}

// FACTORY
// a user defined function which can be used as a decorator factory
// this factory conditionally creates factory functions
function logging(value: boolean) {
 return value ? logged : null;
}
class Car {}
