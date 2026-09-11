function scheduleGreetings() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log("Greeting number " + i);
    }, 100);
  }
}

scheduleGreetings();