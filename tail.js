document.addEventListener('DOMContentLoaded', function () {
    const choices = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function displayResult(userChoice, computerChoice, result) {
        document.getElementById('computerSelection').textContent = computerChoice;
        document.getElementById('roundResult').textContent = `${result} You chose ${userChoice}, computer chose ${computerChoice}.`;
    }

    function makeChoice(userChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        displayResult(userChoice, computerChoice, result);
    }

    // Expose the makeChoice function globally for HTML buttons
    window.makeChoice = makeChoice;
});
