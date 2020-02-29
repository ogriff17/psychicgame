var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Setting for zero
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var letterUser = [];
var eachofLetters = null;

// Sets the computerGuess variable equal to a random choice from the computerChoice array.
var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

  document.getElementById("Wins").innerHTML = "Wins:" + wins;








