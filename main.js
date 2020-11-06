// let's create a random number between a min & max, user must choose min & max

let min = Number(prompt("pick a minimum"));
let max = Number(prompt("pick a maximum"));

function between(min,max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

let secretNumber = between(min,max);

//console.log("secret number is = " + secretNumber);

console.log("let's see if you can find me!");

let guessed = Number(prompt("your guess: "));

let counter = 1;

while (guessed != secretNumber) {
  console.log("wrong!");
  if (guessed > secretNumber) {
    console.log("lower!");
  }
  if (guessed < secretNumber) {
    console.log("higher!");
  }
  counter += 1;
  guessed = Number(prompt("your new guess: "));
}

console.log("SUCCESS!");
console.log("You have succeeded in " + counter + " attempts!");