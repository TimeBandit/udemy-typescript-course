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
