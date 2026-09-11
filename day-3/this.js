const user = {
  name: "Dev",
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

user.greet();

const boundGreet = user.greet.bind(user);
boundGreet();

const user3 = {
  name: "Dev3",
  greetLater: function () {
    setTimeout(() => {
      console.log(`Hi, I'm ${this.name}`);
    }, 100);
  },
};

user3.greetLater();