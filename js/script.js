// script.js

//welcome greetings code

const hitButton = document.querySelector(".btn-enter");
const messages = 
[
	"How is your day?", 
	"Can't decide what to do for the day??", 
	"Check out the Weather Forecast to help you plan the day.",
	"Or have a relaxing day..lay back, put your feet up and have a few games."
];
let delay = 0;


function getUserName() {
    let userName = document.querySelector("#username").value;
    let greetings = `Welcome ${userName}!`;
    let grandGreetings = greetings.toUpperCase();
    
    document.querySelector("#welcome-msg").innerHTML = `✨ ${grandGreetings} ✨`;
    document.querySelector("#user-info").innerHTML = "";
	document.querySelector(".narrative").style.display = "block";

	messages.forEach(function (message) {
		setTimeout(function () {
			document.querySelector(".narrative").innerHTML = message;
		}, 3000 + delay);
		delay += 3000;
	});
}	

//To start function using click and enter
hitButton.addEventListener("click", getUserName);
document.querySelector("#username").addEventListener("keyup", function(event) {
	if (event.key == "Enter") {
		getUserName();
		
	}
});


//Rock, paper, scissors
// Complete logic of game inside this function
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function to
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['🗿','🧻','✂️']
		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 10 moves
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (you,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		you = you.toLowerCase();
		computer = computer.toLowerCase();
		if(you === computer){
			result.textContent = 'Tie'
		}
		else if(you == '🗿'){
			if(computer == '🧻'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'You Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(you == '✂️'){
			if(computer == '🗿'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'You Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(you == '🧻'){
			if(computer == '✂️'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'You Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			// result.style.fontSize = '1.5rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			// result.style.fontSize = '1.5rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
		}
		else{
			// result.style.fontSize = '1.5rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();
