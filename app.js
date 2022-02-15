const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const play = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");
        
        play.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };
    //TO PLAY THE GAME
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computerhand');
        //COMPUTER OPTIONS
        const computerOptions= ["rock", "paper", "scissor"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Here is where we call compare hands
                checking(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;                    
            });
        });
    };

    //UPDATE SCORE
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.COMPUTER-SCORE p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };
    
    //CHECKING WHO WINS
    const checking = (playerChoice, computerChoice) => {
        
        const winner = document.querySelector('.winner');
        //CHECK FOR A TIE
        if (playerChoice === computerChoice) {
            winner.textContent='It is a tie';
            return;
        }
        //CHECK FOR ROCK
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissor') {
                winner.textContent= 'Player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent='Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //CHECK FOR PAPER
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent ='Player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent='Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //CHECK FOR SCISSOR
        if (playerChoice === 'scissor') {
            if (computerChoice === 'paper') {
                winner.textContent='Player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent='Computer wins';
                cScore++;
                updateScore();
                return;
            }            
        }
    }


    //CALLING ALL THE ABOVE FUNCTIONS
    startGame();
    playMatch();
};
//STARTING THE GAME FUNCTION
game();