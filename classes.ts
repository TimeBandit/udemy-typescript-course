class Person {
  // public by default
  name: String;
  // cannot be accessed from outside
  private type: String;
  // can only be accessed by descendants
  protected age: number;

  constructor(
    name: string,
    type: string,
    age: number,
    public username: string // shortcut for defining properties
    ){
    this.name=name;
    this.type='human';
    this.age=age;
  }

  printAge(){
    console.log(this.age);
  }

  setType(type: string){
    this.type = type;
  }
}


const myPerson = new Person('imran', 'human', 4);

console.log('myPerson :', myPerson);
console.log('myPerson.type :', myPerson.type);