alert("Hi! Welcome to the game! Let's play!!");
	var Choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
	var wins = 0;
		losses = 0;
		guesses = 9;
		var gameDiv = document.getElementById("game");
		var guessesDiv = document.getElementById("guesses");
		var guessArr = [];
		var i = 0;
		var j = 0;
		document.onkeyup = function(event){
		computerChoice = Choices[Math.floor(Math.random() * Choices.length)];
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
				for(j = 0; j < guessArr.length; j++){
					guessArr[j] = null;
				}
			} else if (userGuess !== computerChoice) {
				guesses--;
				guessArr[j] = userGuess;
				j++;
				guessesDiv.innerHTML = "<p>Your guesses so far: " +  guessArr + "</p>";
			} 
			if( guesses === 0){
				losses++;
				guesses = 9;
				for(j = 0; j <guessArr.length; j++){
					guessArr[j] = null;
				}
			}
		var html = 
		"<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerChoice + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>";
        gameDiv.innerHTML = html;
      
}