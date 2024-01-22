const buttonsEl = document.querySelectorAll('button');
const resultEl = document.getElementById('result');

const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttonsEl.forEach(button => {
	button.addEventListener('click', () => {
		const result = playRound(button.id, computerPlay());
		resultEl.textContent = result;
		playerScoreEl.textContent = playerScore;
		computerScoreEl.textContent = computerScore;
	});
});

function computerPlay(){
	const choices = ["pedra", "papel", "tesoura"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
	if(playerSelection === computerSelection){
		return "Empatou!"
	}else if(
		(playerSelection === "pedra" && computerSelection === "tesoura") ||
		(playerSelection === "papel" && computerSelection === "pedra") ||
		(playerSelection === "tesoura" && computerSelection === "papel")
		) {
			playerScore++;
			return "Você Ganhou! " + playerSelection + " bateu " + computerSelection;
		} else {
			computerScore++;
			return "Você perdeu! " + computerSelection + " bateu " + playerSelection;
		}
}