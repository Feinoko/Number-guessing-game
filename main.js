// let's create a random number between a min & max, user must choose min & max

let launcher = document.querySelector('p');

launcher.addEventListener('click', app);

function app() {
  let min = Number(prompt("pick a minimum"));
  let max = Number(prompt("pick a maximum"));
  function between(min,max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  let secretNumber = between(min,max);

  console.log("let's see if you can find me!");

  let guessed = Number(prompt("your guess: "));

  let counter = 1;

  while (guessed != secretNumber) {
        if (guessed > secretNumber) {
      alert("wrong, lower!");
    }
    if (guessed < secretNumber) {
      alert("wrong, higher!");
    }
    counter += 1;
    guessed = Number(prompt("your new guess: "));
  }

  alert("SUCCESS! You have succeeded in " + counter + " attempts!");
}




