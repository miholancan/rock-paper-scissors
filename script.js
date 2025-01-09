const num = 3;
//score tracker
let humanScore = 0;
let computerScore = 0;
//when round is played this variables will store computer's
//and user's selection

let computerSelection;
let humanSelection;

//arguments for playGame function
let cc = getComputerChoice(num);
let hc = getHumanChoice();


function getComputerChoice(num) {
	let computerChoice = Math.floor(Math.random() * num);
	if (computerChoice === 0) {
		computerSelection = 'rock'
	}
	else if (computerChoice === 1) {
		computerSelection = 'paper'
	}
	else{computerSelection = 'scissors'}
}

function getHumanChoice(){
	let humanChoice = prompt("Please enter Rock, Paper, or Scissors");
	    while (humanChoice.toLowerCase() !== "rock"
	    	&& humanChoice.toLowerCase() !== "paper"
	    	&& humanChoice.toLowerCase() !== "scissors") {
	        alert("Wrong input, you idiot!");
	        humanChoice = prompt("Please enter Rock, Paper, or Scissors");
	    }
	    humanSelection = humanChoice;
}

function playRound(hc, cc){
	if (computerSelection === 'rock' && humanSelection.toLowerCase() === 'rock' ||
		computerSelection === 'paper' && humanSelection.toLowerCase() === 'paper' ||
		computerSelection === 'scissors' && humanSelection.toLowerCase() === 'scissors')
		{console.log('draw');}
	else if (computerSelection === 'rock' && humanSelection.toLowerCase() === 'paper'){
		console.log('You win');
		humanScore++;
	}
	else if (computerSelection === 'rock' && humanSelection.toLowerCase() === 'scissors'){
		console.log('Computer wins');
		computerScore++;
	}
	else if (computerSelection === 'paper' && humanSelection.toLowerCase() === 'rock'){
		console.log('Computer wins');
		computerScore++;
	}
	else if (computerSelection === 'paper' && humanSelection.toLowerCase() === 'scissors'){
		console.log('You win');
		humanScore++;
	}
	else if (computerSelection === 'scissors' && humanSelection.toLowerCase() === 'paper') {
		console.log('Computer wins');
		computerScore++;
	}
	else {console.log('You win');humanScore++;}
}

function resetRound(hc, cc){
	if (humanScore === 5) {
		console.log('===============');
		console.log('GAME OVER - YOU WIN');
	}
	else if (computerScore === 5) {
		console.log('===============');
		console.log('GAME OVER - COMPUTER WINS');
	}
	else{
		cc = getComputerChoice(num);
		hc = getHumanChoice();
	}

}

function playGame() {
	while (humanScore < 5 && computerScore < 5){
		playRound();
		console.log(`You selected ${humanSelection}`);
		console.log(`Computer selected ${computerSelection}`);
		console.log(`Your score: ${humanScore} / Computer score: ${computerScore}`);
		resetRound();
		console.log('---------------------------');
	}

}

playGame();
// console.log(`You selected ${humanSelection}`);
// console.log(`Computer selected ${computerSelection}`);
// console.log(`Your score: ${humanScore} / Computer score: ${computerScore}`);



