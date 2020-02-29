var letters = [
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
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter;
var x;
   x = Math.floor(Math.random() * 26) + 1;
   randomLetter = letters [x-1];

   randomLetter = "b";

   document.onkeyup = function(event){
     var keyPressed = event.key;
     if (keyPressed == randomLetter)
     {
      wins = wins + 1; 
      document.getElementById("Wins").innerHTML = "Wins:" + wins;
     }
     else {
       guessesLeft = guessesLeft - 1; 
       if (guessesLeft == 0){
         losses = losses + 1;
         guessesLeft = 9;
       }
       document.getElementById("Leftover").innerHTML = "Guesses left:" + guessesLeft;
       document.getElementById("Losses").innerHTML = "Losses:" + losses;

     }


   };






    document.getElementById("Wins").innerHTML = "Wins:" + wins;

    document.getElementById("Losses").innerHTML = "Losses:" + losses;

    document.getElementById("Leftover").innerHTML = "Guesses left:" + guessesLeft;

    document.getElementById("soFar").innerHTML = "Your Guesses So Far:" + guessesSoFar;
    








