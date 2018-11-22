var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username // shortcut for defining properties
    ) {
        this.username = username;
        // cannot be accessed from outside
        this.type = 'Entity';
        // can only be accessed by descendants
        this.age = 17;
        this.name = name;
    }
    // methods can also be private & protected
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var myPerson = new Person('imran', 'human');
// print person
console.log(myPerson);
// accessing a protected member
myPerson.printAge();
// accessing a private member
myPerson.setType('elephant');
var SuperHuman = /** @class */ (function (_super) {
    __extends(SuperHuman, _super);
    // name overwrites the value passed in the constructor
    // name: String = 'Kalel';
    // if you create your own constructor you must call the 
    // parents constructor
    function SuperHuman(name, username) {
        var _this = _super.call(this, name, username) || this;
        _this.secret = 'Kryptonite can kill him';
        // can access the inherited protected member
        _this.age = 1000;
        return _this;
    }
    return SuperHuman;
}(Person));
var superman = new SuperHuman('superman', 'hero');
console.log(superman);
