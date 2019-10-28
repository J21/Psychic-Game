alert("Hi! Welcome to the game! Let's play!!");
	//this first variable holds the array of letters
	var Choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
	var wins = 0; //initialise the wins, losses, and guesses remaining: 
		losses = 0;
		guesses = 9;
		var gameDiv = document.getElementById("game");
		var guessesDiv = document.getElementById("guesses");
		var guessArr = [];
		var i = 0;
		var j = 0;
		/*When a key is pressed, this function will begin.
		The computer will select a key from the Choices array at random and compare
		against the key you pressed. If correct, you win! Otherwise, you keep
		guessing until you run out.
		*/
		document.onkeyup = function(event){
		computerChoice = Choices[Math.floor(Math.random() * Choices.length)]; //chooses a random letter from the Choices array
		guessesDiv.innerHTML = "Your guesses so far: ";
		var userGuess = event.key;
			for(i = 0; i < Choices.length; i++){
				if(userGuess !== Choices[i]){
					console.log("Checking for letter.");
				}
			}
			if(userGuess === computerChoice) {
				wins++;
				guesses = 9;
				guessArr = [];
				guessesDiv.innerHTML = "Your guesses so far: ";
				j = 0;
			} else if (userGuess !== computerChoice) {
				guesses--;
				guessArr[j] = userGuess;
				j++;
				guessesDiv.innerHTML = "<p>Your guesses so far: " +  guessArr + "</p>";
			} 
			if( guesses === 0){
				losses++;
				guesses = 9;
				guessArr = [];
				guessesDiv.innerHTML = "Your guesses so far: ";
				j = 0;
			}
		var html = 
		"<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerChoice + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" + 
        "<p>guesses: " + guesses + "</p>";
        gameDiv.innerHTML = html;
      
}