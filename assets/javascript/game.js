var wins = 0;
var guessesRemaining = 10;
var won = false;

var mood = ["happy", "sad", "excited", "mad"]

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

var guesses = [];

var wordBox = document.getElementById("word-box");
var lettersGuessedBox = document.getElementById("letters-guessed-box");
var numberRemainingGuessesBox = document.getElementById("missed-box");
var winsBox = document.getElementById("wins-box");

function random(mood) {
    var randomNumber = Math.floor(Math.random() * mood.length);
    console.log(randomNumber);
    return mood[Math.floor(Math.random() * mood.length)]
}

var computerPick = random(mood);
console.log(computerPick);

function writeCurrentWord(word) {
    var currentWord = "";
}

for (var i = 0; i < mood.length - 1; i++) {
    if (word.charAt(i).toUpperCase() === " ") {
        currentWord += "\ \ ";
    }
    else if (!guesses.includes(word.charAt(i).toUpperCase())) {
        currentWord += "_";
    }
    else {
        currentWord += word.charAt(i);
    }
}

if (!guesses.includes(word.charAt(word.length - 1).toUpperCase())) {
    currentWord += "_";
}

else {
    currentWord += word.charAt(word.length - 1);
}

wordBox.textContent = currentWord;

writeCurrentWord(computerPick);

function writeGuessedCharacters() {
    var guessedLettersString = "";
    for (var i = 0; i < guesses.length - 1; i++) {
        if (!computerPick.toUpperCase().includes(guesses[i])) {
            guessedLettersString += guesses[i] + ",";
        }
    }
    if (!computerPick.toUpperCase().includes(guesses[guesses.length - 1])) {
        guessedLettersString += guesses[guesses.length - 1];
    }
    lettersGuessedBox.textContent = guessedLettersString;
}

function resetGame() {
    guesses = [];
    computerPick = mood();
    writeCurrentWord(computerPick);
    guessesRemaining = 10;
    numberRemainingGuessesBox.textContent = guessesRemaining;
    lettersGuessedBox.textContent = "";
    winsBox.textContent = wins;
}

document.onkeyup = function (event) {
    userInput = event.key;
    userInput = userInput.toUpperCase();

    if (alphabet.includes(userInput) && !guesses.includes(userInput)) {
        guesses.push(userInput);

        if (computerPick.toUpperCase().includes(userInput)) {
            writeCurrentWord(computerPick);
        }
        else {
            writeGuessedCharacters();
            guessesRemaining--;
            numberRemainingGuessesBox.textContent = guessesRemaining;
        }
    }
    if (guessesRemaining === 0) {
        resetGame();
    }
    if (won) {
        won = false;
        resetGame();
    }

}