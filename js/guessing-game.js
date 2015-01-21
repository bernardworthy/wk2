// TODO: Write a number guessing game.
//
// Rules: The game will generate a number between 1 and 10,
// inclusive. So, it might generate a 1. Or it might generate
// a 10, or any whole number in between.
//
// The user should enter a number into the text box and then
// click "guess".
//
// You should then tell the user (via alert or another way)
// if her guess was too big, too small, or just right!
//
//
// Look at the HTML, and note that you'll need to
// write two functions:
//
// setGuess(guessValueAsString)
// guess()
//
// Feel free to rename the guessValueAsString parameter

var magicNumber = Math.ceil(Math.random () * 10);
var guessNumber = 0;
var guesses = 0;

function setGuess(value) {
  guessNumber = Number(value);
}

function guess() {

  guesses++;

  if (guessNumber === magicNumber) {

    document.querySelector(".guess-result").textContent = "You Guessed It! It only took you " + guesses + " guess(es)!";
    //alert("You Guessed It! It only took you " + guesses + " guess(es)!");

  } else if (guessNumber < magicNumber){

    document.querySelector(".guess-result").textContent = "Your Guess is Too Small";
    //alert("Your Guess is Too Small");

  } else {

    document.querySelector(".guess-result").textContent = "Your Guess is Too Big";
    //alert ("Your Guess is Too Big");

  }

}
