const animal = {
  eat: function () {
    console.log(this.name + " is eating");
  },
};

const dog = Object.create(animal);
dog.name = "Rex";
dog.bark = function () {
  console.log(this.name + " says Woof!");
};

dog.eat();
dog.bark();

console.log(dog.hasOwnProperty("eat"));
console.log(dog.hasOwnProperty("bark"));
console.log(Object.getPrototypeOf(dog) === animal);