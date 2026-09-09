sayHi(); // called before it's defined below

function sayHi() {
  console.log("Hi!");
}

sayBye(); // called before it's defined below

const sayBye = function () {
  console.log("Bye!");
};