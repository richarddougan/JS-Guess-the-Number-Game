//create secretNumber

var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");


//check guess
if (Number(guess)=== secretNumber) {
	alert("You got it!");
	}
	//otherwise, check if higher
	else if (Number(guess) > secretNumber){
		alert("Too high. Lower it, son!");
	}

	//otherwise, check if lower
	
	else {
		alert("Too low. Get higher!");
	}