const obj = {
  name: "Dev",
};

console.log(obj.toString());
console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("toString"));