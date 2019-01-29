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
  if (!this.type) throw new Error("type is undefined on the parent class");
  console.log(this);
 };
}

@logged
@printable
class Planty {
 name = "Green Plant";
 type = "Fern";
}

const my_plant = new Planty();
// the <any> casting is to get around ts errors
(<any>my_plant).print();

// MULTIPLE DECORATORS
// stack them

//  METHOD DECORATORS
// write a decorator to make a method editable or not
// it takes different parameters compared to class decorators
function editable(value: boolean) {
 return function(target: any, propName: string, descriptor: PropertyDecorator) {
  // see Object.defineProperty
  descriptor.writable = value;
 };
}
//  PROPERTY DECORATORS
function overwritable(value: boolean) {
 return function(target: any, propertyName: string): any {
  // the old descriptor is not accessable in TS
  const newDescriptor: PropertyDescriptor = {
   writable: value
  };
  return newDescriptor;
 };
}
// so far we have only looked at class decorators

class Projecty {
 // uncomment the below and it will complain
 //  @overwritable(false)
 projectName: string;

 constructor(name: string) {
  this.projectName = name;
 }

 //  @editable(false)
 calcBudget() {
  console.log(1000);
 }
}

const project = new Projecty("Super Project");
project.calcBudget();

// the descriptor would mean that the replacing the method below will return an error
// project.calcBudget = function() {
//  console.log(2000);
// };
project.calcBudget();
console.log(project);

// PARAMETER DECORATOR
function printInfo(target: any, methodName: string, paramIndex: number) {
 console.log("Target ", target);
 console.log("Method Name ", methodName);
 console.log("Parameter Index ", paramIndex);
}
class Course {
 name: string;
 constructor(name: string) {
  this.name = name;
 }

 printStudentNumbers(mode: string, @printInfo printAll: boolean) {
  if (printAll) {
   console.log(1000);
  } else {
   console.log(2000);
  }
 }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
