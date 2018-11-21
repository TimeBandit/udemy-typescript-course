var Person = /** @class */ (function () {
    function Person(name, type, age, username // shortcut for defining properties
    ) {
        this.username = username;
        this.name = name;
        this.type = 'human';
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    return Person;
}());
var myPerson = new Person('imran', 'human', 4);
console.log('myPerson :', myPerson);
console.log('myPerson.type :', myPerson.type);
