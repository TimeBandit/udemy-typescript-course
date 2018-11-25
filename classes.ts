class Person {
	// public by default
	name: String;
	// cannot be accessed from outside
	private type: String = "Entity";
	// can only be accessed by descendants
	protected age: number = 17;

	constructor(
		name: String,
		public username: String // shortcut for defining properties
	) {
		this.name = name;
	}

	// methods can also be private & protected
	printAge() {
		console.log(this.age);
	}

	setType(type: String) {
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
	secret: String = "Kryptonite can kill him";
	// name overwrites the value passed in the constructor
	// name: String = 'Kalel';

	// if you create your own constructor you must call the
	// parents constructor
	constructor(name: String, username: String) {
		super(name, username);
		// can access the inherited protected member
		this.age = 1000;
	}
}

const superman = new SuperHuman("superman", "hero");
console.log(superman);

// getter & setters
class Plant {
	// the underscore is used only to keep it different
	// to the name of the setter
	private _species: string = "Default";

	set species(value: string) {
		if (value.length > 3) {
			this._species = value;
		} else {
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
