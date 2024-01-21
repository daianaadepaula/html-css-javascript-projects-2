const buttonsEl = document.querySelectorAll('button');

buttonsEl.forEach(button => {
	button.addEventListener('click', () => {
		const result = playRound(button.id, computerPlay());
		console.log(result);
	});
});

function computerPlay(){
	const choices = ["rock", "paper", "scissors"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
	if(playerSelection === computerSelection){
		return "Empatou!"
	}else if(
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
		) {
			return "Você Ganhou! " + playerSelection + " bateu " + computerSelection;
		} else {
			return "Você perdeu! " + computerSelection + " bateu " + playerSelection;
		}
}