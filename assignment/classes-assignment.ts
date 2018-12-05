// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//     console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//     this.acceleration = this.acceleration + speed;
//   };
// }

class CarClass {
  acceleration: number = 0;
  private _name: string;
  public constructor(name: string) {
    this._name = name;
  }
  public accelerate(value: number) {
    this.acceleration = value + value;
  }

  public honk(): void {
    console.log("Toooooooooot!");
  }
}

let mycar = new CarClass("BMW");
mycar.honk();
console.log(mycar.acceleration);
mycar.accelerate(10);
console.log(mycar.acceleration);

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());

class Base {
  // derived class will have access to these as long as they
  // are public or protected
  constructor(public width: number, public height: number) {}
}

class Rectangle extends Base {
  // this is optional because the base constructor will
  // be called by default 👇
  constructor(width: number, height: number) {
    super(width, height);
  }
  public calcSize(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(20, 30);
console.log(myRect);
console.log(myRect.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function() {
//     return this._firstName;
//   },
//   set: function(value) {
//     if (value.length > 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = "";
//     }
//   },
//   enumerable: true,
//   configurable: true
// });

class APerson {
  private _firstName: string = "default";
  private _lastName: string = "default";

  set firstName(value: string) {
    this._firstName = value;
  }
  get firstName() {
    return this._firstName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
  get lastName() {
    return this._lastName;
  }
}

const newPerson = new APerson();
console.log(newPerson.firstName);
newPerson.firstName = "Ma";
console.log(newPerson.firstName);
newPerson.firstName = "Maximilian";
console.log(newPerson.firstName);
