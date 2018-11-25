console.log("hello you");
let myName = "max";

let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

let hobbies = ["cookied", "running"];
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
	Green = 100, // 1 these id's refer to the last item, the defaul is 0,1...
	Blue // 2
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any - a flexible type, try to avoid using it
let car: any = "bmw";
console.log(car);
car = { brand: "bmw", series: 3 };
console.log(car);

// functions
function getname(name: string): string {
	return name;
}
console.log(getname("imran"));

// void
function sayHello(): void {
	console.log("Hello");
	// nothing is returned
	// will error if you do try to return something
}

// argument types
function multiply(value1: number, value2: number): number {
	return value1 * value2;
}
console.log(multiply(2, 4));

/* function types means it can be assigned to variables */
// let myMultiply;
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // this errors as the function signatures don't match
myMultiply = multiply;
/* the above is not strict because any function can be assigned to the let
better to specify a function signature */

// objects
let userDate: { name: string; age: number } = {
	name: "imran",
	age: 3
};

// complex types
let complex: { data: number[]; output: (all: boolean) => number[] } = {
	data: [1, 2, 3],
	output: function(all: boolean): number[] {
		return this.data;
	}
};

// 'types' makes resusable type definitions possible
type TheComplex = { data: number[]; output: (all: boolean) => number[] };
let monkey: TheComplex;

// unions types
//  used to specify a fixed list of possible types
let realRealAge: number | string;

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
	console.log("Final value is a number");
}

// never - for a function that is never is reached, it never returns
// because it returns an error
function neverReturns(): never {
	throw new Error("An error");
}

// Nullable types, values can be nullified at some point
// but something that is undefined to begin with can
// be nullified

type BankAccount = { money: number; deposit: (value: number) => void };
type Person1 = { name: string; bankAccount: BankAccount; hobbies: string[] };

let bankAccount: BankAccount = {
	money: 2000,
	deposit(value: number) {
		this.money += value;
	}
};

let myself = {
	name: "Max",
	bankAccount: bankAccount,
	hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
