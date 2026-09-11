function makeCounter() {
  let count = 0;

  return function () {
    count = count + 1;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());