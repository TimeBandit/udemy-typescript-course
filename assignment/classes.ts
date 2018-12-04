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
    this.acceleration = value;
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
var baseObject = {
  width: 0,
  length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
  return this.width * this.length;
};
console.log(rectangle.calcSize());

class Base {
  constructor(public width: number, public height: number) {}
}

class Rectangle extends Base {
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
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
