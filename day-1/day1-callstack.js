function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log(new Error("trace").stack);
}

first();