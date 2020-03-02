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
var guessesSoFar = "";
var randomLetter;

function winningLetter(){
  var x;
x = Math.floor(Math.random() * 26) + 1;
   randomLetter = letters [x-1];
}

   document.onkeyup = function(event){
     var keyPressed = event.key;
     guessesSoFar = guessesSoFar + keyPressed + ",";
     document.getElementById("soFar").innerHTML = "Your Guesses So Far:" + guessesSoFar;
     if (keyPressed == randomLetter) //They've won the game
     
     {
      winningLetter ();
      guessesLeft = 9; 
      guessesSoFar = "";
      wins = wins + 1;
      document.getElementById("soFar").innerHTML = "Your Guesses So Far:" + guessesSoFar;
      document.getElementById("Wins").innerHTML = "Wins:" + wins;
      document.getElementById("Leftover").innerHTML = "Guesses left:" + guessesLeft;
      
    }
     else {
       guessesLeft = guessesLeft - 1; 
       if (guessesLeft == 0){ //Used up all their guesses
         winningLetter ();
         losses = losses + 1;
         guessesLeft = 9;
         guessesSoFar = ""; //Eliminated what was in the variable
         
         document.getElementById("soFar").innerHTML = "Your Guesses So Far:" + guessesSoFar;

       }
       document.getElementById("Leftover").innerHTML = "Guesses left:" + guessesLeft;
       document.getElementById("Losses").innerHTML = "Losses:" + losses;
       
     }


   };

    winningLetter ();

    document.getElementById("Wins").innerHTML = "Wins:" + wins;

    document.getElementById("Losses").innerHTML = "Losses:" + losses;

    document.getElementById("Leftover").innerHTML = "Guesses left:" + guessesLeft;

    document.getElementById("soFar").innerHTML = "Your Guesses So Far:" + guessesSoFar;
    








