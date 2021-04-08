let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
    const userScore = Math.abs(userGuess - secretTargetNumber);
    const compScore = Math.abs(computerGuess - secretTargetNumber);

    if (compScore < userScore) {
        return false;
    } else {
        return true;
    }
}

const updateScore = winner => {
    winner = winner.toLowerCase();
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}