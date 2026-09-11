class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " says Woof!");
  }
}

const rex = new Dog("Rex");
rex.eat();
rex.bark();

console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);