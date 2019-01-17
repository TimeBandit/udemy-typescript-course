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
let Person = class Person {
    constructor() {
        console.log("hi");
    }
};
Person = __decorate([
    logged
], Person);
// FACTORY
// a user defined function which can be used as a decorator factory
// this factory conditionally creates factory functions
function logging(value) {
    return value ? logged : null;
}
class Car {
}
