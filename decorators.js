// DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator is a function you create, they can be attached to a class
// if you attach a decorator to a class it will get only one argument
// that is the constructor function of the class
function logged(constructorFn) {
    console.log("hi");
    console.log(constructorFn);
}
let Personly = class Personly {
    constructor() {
        console.log("hi");
    }
};
Personly = __decorate([
    logged
], Personly);
// FACTORY
// a user defined function which can be used as a decorator factory
// this factory conditionally creates factory functions
function logging(value) {
    return value ? logged : null;
}
let Car = class Car {
};
Car = __decorate([
    logging(true) // this conditionally attaches the decorator
], Car);
// ADVANCED
// this adds a print method to the prototype or each object created using this decorator
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log("Printing this...");
        if (!this.type)
            throw new Error("type is undefined on the parent class");
        console.log(this);
    };
}
let Planty = class Planty {
    constructor() {
        this.name = "Green Plant";
        this.type = "Fern";
    }
};
Planty = __decorate([
    logged,
    printable
], Planty);
const my_plant = new Planty();
// the <any> casting is to get around ts errors
my_plant.print();
// MULTIPLE DECORATORS
// stack them
//  METHOD DECORATORS
// so far we have only looked at class decorators
// write a decorator to make a method editable or not
// it takes different parameters compared to class decorators
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.prototype.writable = value;
    };
}
class Projecty {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    editable(false)
], Projecty.prototype, "calcBudget", null);
const project = new Projecty("Super Project");
project.calcBudget();
// the descriptor would mean that the replacing the method below will not work
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
