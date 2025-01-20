let humanScore = 0;
let computerScore = 0;
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('div button');
const computerSelectionMsg = document.getElementById('computerSelectionMsg');
const playerSelectionMsg = document.getElementById('playerSelectionMsg');
const resultMessage = document.getElementById('resultMessage');
const playAgainButton = document.getElementById('playAgainButton');

function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3);
	if (computerChoice === 0) {
		computerSelection = 'rock'
	}
	else if (computerChoice === 1) {
		computerSelection = 'paper'
	}
	else{computerSelection = 'scissors'
	}
	return computerSelection;
}

function playRound(humanSelection){
	getComputerChoice();
	computerSelectionMsg.innerText = (`Computer selected ${computerSelection}`);
	playerSelectionMsg.innerText = (`You selected ${humanSelection}`);
	if (computerSelection === 'rock' && humanSelection === 'rock' ||
		computerSelection === 'paper' && humanSelection === 'paper' ||
		computerSelection === 'scissors' && humanSelection === 'scissors')
	{
		resultMessage.innerText = 'Draw';
	}
	else if (computerSelection === 'rock' && humanSelection === 'paper' ||
			 computerSelection === 'paper' && humanSelection === 'scissors' ||
			 computerSelection === 'scissors' && humanSelection === 'rock')
	{
		resultMessage.innerText = 'You win';
		humanScore++;
	}
	else {
		resultMessage.innerText = 'Computer wins';
		computerScore++;
		}
	console.log(humanScore, computerScore);
	playerScore.innerText = humanScore;
	compScore.innerText = computerScore;
	checkGameEnd();
}

function checkGameEnd() {
	if(humanScore === 5 || computerScore === 5){
		const winner = humanScore === 5 ? 'Player' : 'Computer';
		resultMessage.innerText = `${winner} wins the game`;
		disableButtons();
		playAgainButton.style.display = 'block';
	}
}

function disableButtons() {
	buttons.forEach(button => button.disabled = true);
}

function resetGame(){
	humanScore = 0;
	computerScore = 0;
	computerSelectionMsg.innerText = '';
	playerSelectionMsg.innerText = '';
	playerScore.innerText = humanScore;
	compScore.innerText = computerScore;
	resultMessage.innerText = '';
	buttons.forEach(button => button.disabled = false);
	playAgainButton.style.display = 'none';
}

buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		let target = e.target;
		switch(target.id) {
			case 'rock':
				playRound('rock');

				break;
			case 'paper':
				playRound('paper');

				break;
			case 'scissors':
				playRound('scissors');

				break;
		}
	})
})

playAgainButton.addEventListener('click', resetGame);





