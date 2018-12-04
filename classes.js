class Person {
    constructor(name, username // shortcut for defining properties
    ) {
        this.username = username;
        // cannot be accessed from outside
        this.type = "Entity";
        // can only be accessed by descendants
        this.age = 17;
        this.name = name;
    }
    // methods can also be private & protected
    printAge() {
        console.log(this.age);
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const myPerson = new Person("imran", "human");
// print person
console.log(myPerson);
// accessing a protected member
myPerson.printAge();
// accessing a private member
myPerson.setType("elephant");
class SuperHuman extends Person {
    // name overwrites the value passed in the constructor
    // name: String = 'Kalel';
    // if you create your own constructor you must call the
    // parents constructor
    constructor(name, username) {
        super(name, username);
        this.secret = "Kryptonite can kill him";
        // can access the inherited protected member
        this.age = 1000;
    }
}
const superman = new SuperHuman("superman", "hero");
console.log(superman);
// getter & setters
class Plant {
    constructor() {
        // the underscore is used only to keep it different
        // to the name of the setter
        this._species = "Default";
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = "Default";
        }
    }
    get species() {
        return this._species;
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "Fern";
console.log(plant.species);
// static properties and methods
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
// static means that it can be accessed without instantiation
// good for creating helper classes
Helpers.PI = 3.145;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// abstract classes
// can't be instantiated, can only inherit from
// useful for classes that need some basic setup
// abstract on a class means it needs to be extended
// abstract on a method means this method needs to be implemented
// in the child class using the function type setup given
class Project {
    constructor() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
let proj1 = new ITProject();
let proj2 = new ITProject();
proj1.changeName("Dam");
console.log(proj1);
console.log(proj2);
// private constructors
// allows you to create a singleton class
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}
// 👇 can't instantiate because the constructor is private
// let wrong = new OnlyOne("The only one");
let right = OnlyOne.getInstance();
// readonly properties
console.log(right);
