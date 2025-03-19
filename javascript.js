// COMPUTER CHOICE
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// PLAY ROUND FUNCTION
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result;

    if (humanChoice === computerChoice) {
        result = "// it's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `// you win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        result = `// you lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    updateScoreboard(result);
    checkWinner();
}

// UPDATE SCOREBOARD
function updateScoreboard(result) {
    document.getElementById('result').textContent = result;
    const scoreElement = document.getElementById('score');

    // CLEAR EXISTING CONTENT
    scoreElement.innerHTML = "";

    const fragment = document.createDocumentFragment();

    // FUNCTION TO CREATE SPAN ELEMENT
    function createSpan(className, text) {
        const span = document.createElement("span");
        span.className = className;
        span.textContent = text;
        return span;
    }

    // CREATE SPAN ELEMENTS
    const elements = [
        createSpan("label", ".player "),
        createSpan("bracket", "{ "),
        createSpan("score", humanScore),
        createSpan("bracket", " }"),
        document.createTextNode(" - "), // Plain text separator
        createSpan("label", ".computer "),
        createSpan("bracket", "{ "),
        createSpan("score", computerScore),
        createSpan("bracket", " }")
    ];

    // APPEND SPAN ELEMENTS
    elements.forEach(el => fragment.appendChild(el));

    // APPEND FRAGMENT
    scoreElement.appendChild(fragment);
}

// CHECK FOR WINNER
function checkWinner() {
    if (humanScore === 5) {
        document.getElementById('result').textContent = "// you won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('result').textContent = "// computer won the game!";
        disableButtons();
    }
}

// DISABLE BUTTONS
function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

// INITIALIZE UI ELEMENTS
let humanScore = 0;
let computerScore = 0;

// SELECT EXISTING BUTTONS
const buttons = document.querySelectorAll('.btn');
const choices = ['rock', 'paper', 'scissors'];

buttons.forEach((button, index) => {
    button.textContent = choices[index];
    button.addEventListener('click', () => playRound(choices[index]));
});

// INITIAL SCORE DISPLAY
updateScoreboard("// score");
