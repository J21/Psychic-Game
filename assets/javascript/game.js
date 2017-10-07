(function() { // Wrap in a function to not pollute the global scope

  // Colors. These are the color names you can use in CSS. You could use color codes
  // like #rrggbb as well.
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  var colorIndex = 0;

  setInterval(function(){
    // Set the color and increment the index.
    document.body.style.backgroundColor = colors[colorIndex++];

    // Wrap the index if it goes past the length of the array. % is modulo.
    colorIndex %= colors.length;
    }, 1000);
})();
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