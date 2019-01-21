// DECORATORS

// decorator is a function you create, they can be attached to a class
// if you attach a decorator to a class it will get only one argument
// that is the constructor function of the class
function logged(constructorFn: Function) {
 console.log("hi");
 console.log(constructorFn);
}

@logged
class Personly {
 constructor() {
  console.log("hi");
 }
}

// FACTORY
// a user defined function which can be used as a decorator factory
// this factory conditionally creates factory functions
function logging(value: boolean): Function | null {
 return value ? logged : null;
}

@logging(true) // this conditionally attaches the decorator
class Car {}

// ADVANCED
// this adds a print method to the prototype or each object created using this decorator
function printable(constructorFn: Function) {
 constructorFn.prototype.print = function() {
  console.log("Printing this...");
  if !this.type throw new Error('type is undefined on the parent class')
  console.log(this);
 };
}

@logged
@printable
class Planty {
 name = "Green Plant";
 type = 'Fern'
}

const my_plant = new Planty();
// the <any> casting is to get around ts errors
(<any>my_plant).print();

// MULTIPLE DECORATORS
// stack them
