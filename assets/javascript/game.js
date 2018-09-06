var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let guesses = 9;
let guessesRemaining = 9;
let lettersGuessed = [];
var letterChoice = null;

var reset = function() {
    totalGuesses = 9;
    guessesRemaining = 9;
    lettersGuessed = [];

    updateLetterToGuess();
    updateGuessesRemaining();
    updateLettersGuessedSoFar();
}
updateLetterToGuess();
updateGuessesRemaining();

document.querySelector('#wins').innerHTML = "Wins: " + wins;
document.querySelector('#losses').innerHTML = "Losses: " + losses;

var computerPick = computerOptions[Math.floor(Math.random() * computerOptions.length)];


function updateGuessesRemaining() {
    document.querySelector('#remaining-guesses').innerHTML = "Remaining guesses: " + guessesRemaining;
};

function updateLetterToGuess() {
    this.letterChoice = this.computerOptions[Math.floor(Math.random() * this.computerOptions.length)];
};

function updateLettersGuessedSoFar() {
    document.querySelector('#letters-guessed').innerHTML = "Your Guesses so far: " + lettersGuessed.join(', ');
};

document.onkeyup = function(event) {
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerOptions.includes(userChoice);

    if (check === false) {
        alert("That was not a valid guess, please pick a letter.");
        return false;
    } else if (check === true) {
        lettersGuessed.push(userChoice);
        guessesRemaining--;
        updateGuessesRemaining();
        updateLettersGuessedSoFar();

        if (guessesRemaining > 0) {
            if (userChoice == letterChoice) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userChoice = userChoice.toUpperCase();
                alert("You're psychic, " + userChoice + " is correct!");
                reset();
            }
        } else if (guessesRemaining == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You weren't psychic this time but keep trying!");
            reset();
        }
        return false;
    } 
};