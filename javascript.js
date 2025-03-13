
// COMPUTER CHOICE
function getComputerChoice() {
    // ARRAY & MATH.RANDOM METHOD VVVV
    // const choices = ['rock', 'paper', 'scissors'];
    // const randomNumber = Math.floor(Math.random() * 3);
    // return choices[randomNumber];

    // MATH RANDOM METHOD VVVV
    const randomNumber = Math.floor(Math.random() * 3); // 0, 1, 2
    if (randomNumber === 0) return 'rock'; // 0
    if (randomNumber === 1) return 'paper'; // 1
    return 'scissors'; // 2
}

// HUMAN CHOICES
function getHumanChoice() {
    let humanChoice; //
    while (true) { // INFINITE LOOP
        humanChoice = prompt('Enter your choice: rock, paper, or scissors').toLowerCase(); // PROMPT
        if (['rock', 'paper', 'scissors'].includes(humanChoice)) { // CHECK IF VALID CHOICE
            return humanChoice; // RETURN CHOICE IF VALID
        }
        alert('Invalid choice! Please enter rock, paper, or scissors.'); // ALERT IF INVALID
    }
}

// PLAY ROUND
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'tie'; // RETURN TIE IF CHOICES ARE THE SAME
    }
    
    if ( // WINNING CONDITIONS
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'human'; // RETURN HUMAN IF HUMAN WINS
    }
    return 'computer'; // RETURN COMPUTER IF COMPUTER WINS
}

// PLAY GAME
function playGame() {
    let humanScore = 0; // HUMAN SCORE
    let computerScore = 0; // COMPUTER SCORE

    // PLAY 5 ROUNDS
    for (let i = 0; i < 5; i++) { // LOOP 5 TIMES

        // CALL FUNCTIONS
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        // SCORES
        if (result === 'human') {
            humanScore++; // INCREMENT HUMAN SCORE
            console.log(`You win this round! ${humanSelection} beats ${computerSelection}`);
        } else if (result === 'computer') {
            computerScore++; // INCREMENT COMPUTER SCORE
            console.log(`You lose this round! ${computerSelection} beats ${humanSelection}`);
        } else {
            console.log(`It's a tie!`); // TIE
        }
    }

    // FINAL SCORES
    if (humanScore > computerScore) { // COMPARE SCORES
        console.log(`You win the game! Your score: ${humanScore}, Computer score: ${computerScore}`); // WIN
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Your score: ${humanScore}, Computer score: ${computerScore}`); // LOSE
    } else {
        console.log(`It's a tie! Final score: ${humanScore}-${computerScore}`); // TIE
    }
}

// START THE GAME
playGame();
